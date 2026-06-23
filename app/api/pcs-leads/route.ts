import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Calculate urgency score (days until report date)
    let urgencyScore: number | null = null
    if (body.reportDate) {
      const reportDate = new Date(body.reportDate)
      const today = new Date()
      urgencyScore = Math.round((reportDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    }

    // Determine urgency tier
    let urgencyTier = 'PLANNING — 90+ Days'
    if (urgencyScore !== null) {
      if (urgencyScore <= 0) urgencyTier = 'PAST DUE'
      else if (urgencyScore <= 30) urgencyTier = 'CRITICAL — <30 Days'
      else if (urgencyScore <= 60) urgencyTier = 'HIGH — 30-60 Days'
      else if (urgencyScore <= 90) urgencyTier = 'MODERATE — 60-90 Days'
    }

    // Write to Supabase pcs_leads table
    const { error: dbError } = await supabase.from('pcs_leads').insert([{
      first_name: body.firstName,
      last_name: body.lastName,
      branch: body.branch,
      rank: body.rank,
      destination_base: body.destinationBase,
      report_date: body.reportDate || null,
      current_duty_station: body.currentDutyStation,
      phone: body.phone,
      email: body.email,
      // JBER fields
      jber_neighborhood: body.jberNeighborhood,
      glenn_hwy_ok: body.glennHwyOk,
      garage_needed: body.garageNeeded,
      vehicle_type: body.vehicleType,
      school_priority: body.schoolPriority,
      // Fairbanks fields
      fairbanks_neighborhood: body.fairbanksNeighborhood,
      winter_awareness: body.winterAwareness,
      heated_garage_required: body.heatedGarageRequired,
      heating_system: body.heatingSystem,
      diesel_vehicle: body.dieselVehicle,
      // Financing
      va_eligible: body.vaEligible,
      coe_status: body.coeStatus,
      prior_va_use: body.priorVaUse,
      bah_confirmed: body.bahConfirmed,
      budget_range: body.budgetRange,
      timeline: body.timeline,
      // Household
      household_size: body.householdSize ? parseInt(body.householdSize) : null,
      school_children: body.schoolChildren,
      has_pets: body.hasPets,
      pet_details: body.petDetails,
      source: body.source,
      notes: body.notes,
      // Computed
      urgency_score: urgencyScore,
      urgency_tier: urgencyTier,
      lead_stage: 'New',
      submitted_at: new Date().toISOString(),
    }])

    if (dbError) console.error('Supabase error:', dbError)

    // Send notification email to Derek
    const baseType = body.destinationBase?.includes('JBER') ? 'JBER / Anchorage' : 'Fairbanks / Interior'
    await resend.emails.send({
      from: 'leads@huit.ai',
      to: 'derekhuit@gmail.com',
      subject: `🎖️ PCS Lead — ${body.rank} ${body.lastName} → ${body.destinationBase} | ${urgencyTier}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; color: #1a1a1a;">
          <div style="background: #0B1015; color: #fff; padding: 20px;">
            <p style="color: #B87333; margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">New PCS Lead — ${urgencyTier}</p>
            <h1 style="margin: 0; font-size: 28px;">${body.rank} ${body.firstName} ${body.lastName}</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.6);">${body.branch} → ${body.destinationBase}</p>
          </div>
          <div style="padding: 20px; background: #f5f5f0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="padding: 6px 0; color: #666;">Report Date</td><td style="padding: 6px 0; font-weight: bold;">${body.reportDate || 'Not provided'} (${urgencyScore !== null ? urgencyScore + ' days out' : 'N/A'})</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Phone</td><td style="padding: 6px 0;"><a href="tel:${body.phone}">${body.phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Email</td><td style="padding: 6px 0;">${body.email}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Current Station</td><td style="padding: 6px 0;">${body.currentDutyStation}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">VA Eligible</td><td style="padding: 6px 0;">${body.vaEligible}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">COE Status</td><td style="padding: 6px 0;">${body.coeStatus || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Budget</td><td style="padding: 6px 0;">${body.budgetRange || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Timeline</td><td style="padding: 6px 0;">${body.timeline || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Area Interest</td><td style="padding: 6px 0;">${body.jberNeighborhood || body.fairbanksNeighborhood || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Heated Garage</td><td style="padding: 6px 0;">${body.garageNeeded || body.heatedGarageRequired || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Household Size</td><td style="padding: 6px 0;">${body.householdSize || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #666;">Pets</td><td style="padding: 6px 0;">${body.hasPets === 'Yes' ? 'Yes — ' + (body.petDetails || 'details not provided') : body.hasPets || 'N/A'}</td></tr>
            </table>
            ${body.notes ? `<div style="margin-top: 16px; padding: 12px; background: #fff; border-left: 3px solid #B87333;"><p style="margin: 0; font-size: 13px; color: #333;">${body.notes}</p></div>` : ''}
          </div>
          <div style="padding: 12px 20px; background: #1a1a1a; color: rgba(255,255,255,0.4); font-size: 11px;">
            Sent via AK Military Home Loans PCS Intake · Huit.AI PCS System
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('PCS lead submission error:', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
