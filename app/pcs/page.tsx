'use client'
import { useState } from 'react'

type Step = 'identity' | 'base-branch' | 'jber-local' | 'fairbanks-local' | 'financing' | 'household' | 'confirm' | 'success'

const COPPER = 'text-copper'
const COPPER_BG = 'bg-copper hover:bg-copperDeep'

export default function PCSPage() {
  const [step, setStep] = useState<Step>('identity')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    firstName: '', lastName: '', branch: '', rank: '',
    destinationBase: '', reportDate: '', currentDutyStation: '',
    phone: '', email: '',
    // JBER-specific
    jberNeighborhood: '', glennHwyOk: '', garageNeeded: '',
    vehicleType: '', schoolPriority: '',
    // Fairbanks-specific
    fairbanksNeighborhood: '', winterAwareness: '', heatedGarageRequired: '',
    heatingSystem: '', dieselVehicle: '',
    // Financing
    vaEligible: '', coeStatus: '', priorVaUse: '', bahConfirmed: '', budgetRange: '', timeline: '',
    // Household
    householdSize: '', schoolChildren: '', hasPets: '', petDetails: '', source: '', notes: '',
    tcpa: false,
  })

  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))

  const inputCls = `w-full px-4 py-3.5 text-base rounded-sm border transition-colors bg-ink/5 border-ink/20 text-ink placeholder-ink/40 focus:border-copper focus:outline-none`
  const selectCls = `w-full px-4 py-3.5 text-base rounded-sm border transition-colors bg-white border-ink/20 text-ink focus:border-copper focus:outline-none appearance-none`
  const labelCls = `block text-xs font-mono uppercase tracking-[0.15em] text-ink/60 mb-1.5`
  const fieldWrap = `mb-4`
  const nextBtn = `w-full ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm disabled:opacity-50 cursor-pointer border-0`
  const backBtn = `w-full bg-transparent border border-ink/20 hover:border-copper text-ink font-medium py-3 tracking-wide uppercase text-sm rounded-sm cursor-pointer transition-colors`

  const progressMap: Record<Step, number> = {
    identity: 1, 'base-branch': 2, 'jber-local': 3, 'fairbanks-local': 3,
    financing: 4, household: 5, confirm: 6, success: 6,
  }
  const progress = progressMap[step]
  const totalSteps = 6

  async function handleSubmit() {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/pcs-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStep('success')
    } catch {
      setError('Something went wrong. Please call (907) 244-9368 directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-bone text-ink">
      {/* Nav */}
      <nav className="px-5 sm:px-8 lg:px-12 py-5 flex items-center justify-between border-b border-ink/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-copper" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em]">AK Military Home Loans</span>
        </div>
        <a href="/" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70 hover:text-copper transition-colors">← Back to home</a>
      </nav>

      {/* Hero */}
      <section className="bg-ink text-bone px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-copper mb-4">PCS Housing Intelligence</p>
          <h1 className="font-display text-[38px] sm:text-[58px] tracking-tightest leading-[0.95] mb-6">
            PCS orders to Alaska.<br />
            <span className="text-copper italic">Let's get ahead of them.</span>
          </h1>
          <p className="text-bone/70 text-lg max-w-xl leading-relaxed">
            JBER or Fairbanks — each assignment has different terrain, different commutes, and different housing realities.
            This takes 4 minutes. We'll reach out within the hour.
          </p>
        </div>
      </section>

      {/* Progress */}
      {step !== 'success' && (
        <div className="px-5 sm:px-8 lg:px-12 py-5 border-b border-ink/10 bg-paper">
          <div className="max-w-xl flex items-center gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < progress ? 'bg-copper' : 'bg-ink/10'}`} />
            ))}
            <span className="font-mono text-[10px] text-ink/50 ml-2 whitespace-nowrap">Step {progress} / {totalSteps}</span>
          </div>
        </div>
      )}

      {/* Form body */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-xl mx-auto">

          {/* STEP 1 — Identity */}
          {step === 'identity' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-8">Who's PCS&rsquo;ing?</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className={fieldWrap}>
                  <label className={labelCls}>First name</label>
                  <input className={inputCls} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="First" />
                </div>
                <div className={fieldWrap}>
                  <label className={labelCls}>Last name</label>
                  <input className={inputCls} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Last" />
                </div>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Branch of service</label>
                <select className={selectCls} value={form.branch} onChange={e => set('branch', e.target.value)}>
                  <option value="">Select branch</option>
                  {['Army','Air Force','Space Force','Coast Guard','Marines','Navy'].map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Rank</label>
                <select className={selectCls} value={form.rank} onChange={e => set('rank', e.target.value)}>
                  <option value="">Select rank</option>
                  <optgroup label="Enlisted">
                    {['E-1','E-2','E-3','E-4','E-5','E-6','E-7','E-8','E-9'].map(r => <option key={r}>{r}</option>)}
                  </optgroup>
                  <optgroup label="Warrant Officer">
                    {['W-1','W-2','W-3','W-4','W-5'].map(r => <option key={r}>{r}</option>)}
                  </optgroup>
                  <optgroup label="Officer">
                    {['O-1','O-2','O-3','O-4','O-5','O-6','O-7','O-8','O-9','O-10'].map(r => <option key={r}>{r}</option>)}
                  </optgroup>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Destination base</label>
                <select className={selectCls} value={form.destinationBase} onChange={e => set('destinationBase', e.target.value)}>
                  <option value="">Select base</option>
                  <option>JBER (Anchorage)</option>
                  <option>Fort Wainwright (Fairbanks)</option>
                  <option>Eielson AFB (Fairbanks area)</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Report date</label>
                <input type="date" className={inputCls} value={form.reportDate} onChange={e => set('reportDate', e.target.value)} />
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Current duty station</label>
                <input className={inputCls} value={form.currentDutyStation} onChange={e => set('currentDutyStation', e.target.value)} placeholder="Fort Campbell, KY" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={fieldWrap}>
                  <label className={labelCls}>Mobile phone</label>
                  <input type="tel" className={inputCls} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(907) 000-0000" />
                </div>
                <div className={fieldWrap}>
                  <label className={labelCls}>Email</label>
                  <input type="email" className={inputCls} value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" />
                </div>
              </div>
              <button
                className={nextBtn}
                disabled={!form.firstName || !form.lastName || !form.destinationBase || !form.phone || !form.email}
                onClick={() => setStep('base-branch')}
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2 — Base branch redirect */}
          {step === 'base-branch' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-3">
                {form.destinationBase.includes('JBER') ? 'JBER — Anchorage area' : 'Fairbanks — Interior Alaska'}
              </h2>
              <p className="text-ink/60 mb-8 leading-relaxed">
                {form.destinationBase.includes('JBER')
                  ? 'Anchorage has 9 distinct neighborhoods each with different commute profiles to base. Let\'s figure out where you should be looking.'
                  : 'Interior Alaska is a different assignment than anywhere else in the military. Temperatures, infrastructure, and housing costs require different guidance. A few quick questions.'}
              </p>
              <div className="flex gap-3">
                <button className={backBtn} onClick={() => setStep('identity')}>← Back</button>
                <button className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm`}
                  onClick={() => setStep(form.destinationBase.includes('JBER') ? 'jber-local' : 'fairbanks-local')}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3A — JBER local intel */}
          {step === 'jber-local' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-8">Anchorage — where are you thinking?</h2>
              <div className={fieldWrap}>
                <label className={labelCls}>Preferred area relative to JBER</label>
                <select className={selectCls} value={form.jberNeighborhood} onChange={e => set('jberNeighborhood', e.target.value)}>
                  <option value="">Select area</option>
                  <option>On-post (Birchwood / Ursa Manor)</option>
                  <option>Eagle River (15–25 min, Glenn Hwy)</option>
                  <option>Muldoon / Mountain View (5–10 min)</option>
                  <option>South Anchorage / Hillside (20–35 min)</option>
                  <option>Wasilla / Palmer (45–60 min via Glenn Hwy)</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>
              {(form.jberNeighborhood === 'Wasilla / Palmer (45–60 min via Glenn Hwy)') && (
                <div className="bg-copper/10 border border-copper/30 rounded-sm p-5 mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-2">Before you commit to Mat-Su</p>
                  <p className="text-sm text-ink/80 leading-relaxed">The Glenn Highway is one of the most dangerous winter commutes in Alaska — ice, moose, and whiteout conditions from October to April. Many JBER families who move to Wasilla don't anticipate the toll of that commute in January. We'll walk you through the real math before you choose.</p>
                  <div className={fieldWrap + ' mt-4'}>
                    <label className={labelCls}>Aware of the Glenn Hwy winter conditions?</label>
                    <select className={selectCls} value={form.glennHwyOk} onChange={e => set('glennHwyOk', e.target.value)}>
                      <option value="">Select</option>
                      <option>Yes — I've researched it</option>
                      <option>I need more information</option>
                      <option>I'd prefer to stay closer to base</option>
                    </select>
                  </div>
                </div>
              )}
              <div className={fieldWrap}>
                <label className={labelCls}>Garage requirement</label>
                <select className={selectCls} value={form.garageNeeded} onChange={e => set('garageNeeded', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes — heated garage essential</option>
                  <option>Yes — unheated garage acceptable</option>
                  <option>No garage needed</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Vehicle type</label>
                <select className={selectCls} value={form.vehicleType} onChange={e => set('vehicleType', e.target.value)}>
                  <option value="">Select</option>
                  <option>AWD / 4WD — we're prepared</option>
                  <option>2WD — will need to adjust or upgrade</option>
                  <option>Currently car-shopping</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>School district priority?</label>
                <select className={selectCls} value={form.schoolPriority} onChange={e => set('schoolPriority', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes — Anchorage School District (ASD)</option>
                  <option>Yes — Mat-Su Borough School District</option>
                  <option>Either — willing to commute kids</option>
                  <option>No school-age children</option>
                </select>
              </div>
              <div className="flex gap-3 mt-6">
                <button className={backBtn} onClick={() => setStep('base-branch')}>← Back</button>
                <button className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm`}
                  onClick={() => setStep('financing')}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3B — Fairbanks local intel */}
          {step === 'fairbanks-local' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-8">Interior Alaska — let's be direct with you.</h2>
              <div className={fieldWrap}>
                <label className={labelCls}>Where are you considering?</label>
                <select className={selectCls} value={form.fairbanksNeighborhood} onChange={e => set('fairbanksNeighborhood', e.target.value)}>
                  <option value="">Select area</option>
                  <option>On-post</option>
                  <option>Fairbanks Proper (close to Wainwright)</option>
                  <option>North Pole (close to Eielson)</option>
                  <option>Ester / Goldstream Valley (rural)</option>
                  <option>Not sure — need guidance</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Have you researched Interior Alaska winter conditions?</label>
                <select className={selectCls} value={form.winterAwareness} onChange={e => set('winterAwareness', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes — I know about -40°F and ice fog</option>
                  <option>I've heard it's cold but don't know specifics</option>
                  <option>No — this is my first cold-weather assignment</option>
                </select>
              </div>
              {(form.winterAwareness === "I've heard it's cold but don't know specifics" || form.winterAwareness === "No — this is my first cold-weather assignment") && (
                <div className="bg-ink text-bone rounded-sm p-5 mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-2">Interior AK reality check</p>
                  <p className="text-sm text-bone/80 leading-relaxed">Fairbanks regularly sees -40°F to -50°F November through February. Ice fog — frozen exhaust suspended in air — can drop visibility near zero. A heated garage isn't a luxury here, it's infrastructure. Diesel supplements, block heaters, and propane backup are standard. We filter your housing search to account for all of it.</p>
                </div>
              )}
              <div className={fieldWrap}>
                <label className={labelCls}>Heated garage — hard requirement?</label>
                <select className={selectCls} value={form.heatedGarageRequired} onChange={e => set('heatedGarageRequired', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes — absolute must-have</option>
                  <option>Preferred but flexible</option>
                  <option>Not required</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Home heating system preference</label>
                <select className={selectCls} value={form.heatingSystem} onChange={e => set('heatingSystem', e.target.value)}>
                  <option value="">Select</option>
                  <option>Natural gas (limited coverage in Fairbanks)</option>
                  <option>Heating oil — standard, budget for $800–1,200/mo winter</option>
                  <option>Propane — common in outlying areas</option>
                  <option>Wood stove supplemental — yes</option>
                  <option>I need guidance on this</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Diesel vehicle?</label>
                <select className={selectCls} value={form.dieselVehicle} onChange={e => set('dieselVehicle', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Considering purchasing one</option>
                </select>
              </div>
              <div className="flex gap-3 mt-6">
                <button className={backBtn} onClick={() => setStep('base-branch')}>← Back</button>
                <button className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm`}
                  onClick={() => setStep('financing')}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 — Financing */}
          {step === 'financing' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-8">VA loan & financing</h2>
              <div className={fieldWrap}>
                <label className={labelCls}>VA loan eligible?</label>
                <select className={selectCls} value={form.vaEligible} onChange={e => set('vaEligible', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not sure</option>
                </select>
              </div>
              {form.vaEligible === 'Yes' && (
                <>
                  <div className={fieldWrap}>
                    <label className={labelCls}>Certificate of Eligibility (COE) status</label>
                    <select className={selectCls} value={form.coeStatus} onChange={e => set('coeStatus', e.target.value)}>
                      <option value="">Select</option>
                      <option>Already obtained</option>
                      <option>In process</option>
                      <option>Haven't started</option>
                    </select>
                  </div>
                  <div className={fieldWrap}>
                    <label className={labelCls}>Prior VA loan use?</label>
                    <select className={selectCls} value={form.priorVaUse} onChange={e => set('priorVaUse', e.target.value)}>
                      <option value="">Select</option>
                      <option>No — full entitlement</option>
                      <option>Yes — one time, entitlement restored</option>
                      <option>Yes — still have existing VA loan</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </>
              )}
              <div className={fieldWrap}>
                <label className={labelCls}>BAH confirmed for new duty station?</label>
                <select className={selectCls} value={form.bahConfirmed} onChange={e => set('bahConfirmed', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No — haven't checked yet</option>
                  <option>What is BAH?</option>
                </select>
              </div>
              {form.bahConfirmed === 'What is BAH?' && (
                <div className="bg-copper/10 border border-copper/30 rounded-sm p-4 mb-4 text-sm text-ink/80 leading-relaxed">
                  BAH (Basic Allowance for Housing) is your monthly housing stipend based on rank and duty station ZIP. For JBER E-7 with dependents, it's approximately $2,700–$2,900/month in 2026. We'll walk you through it on our first call.
                </div>
              )}
              <div className={fieldWrap}>
                <label className={labelCls}>Target purchase price range</label>
                <select className={selectCls} value={form.budgetRange} onChange={e => set('budgetRange', e.target.value)}>
                  <option value="">Select</option>
                  <option>Under $300K</option>
                  <option>$300K – $400K</option>
                  <option>$400K – $500K</option>
                  <option>$500K – $600K</option>
                  <option>$600K+</option>
                  <option>Need guidance — not sure yet</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Move-in timeline relative to report date</label>
                <select className={selectCls} value={form.timeline} onChange={e => set('timeline', e.target.value)}>
                  <option value="">Select</option>
                  <option>Before report date (arrive early)</option>
                  <option>Within first 30 days</option>
                  <option>Within 60–90 days (temp housing first)</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div className="flex gap-3 mt-6">
                <button className={backBtn} onClick={() => setStep(form.destinationBase.includes('JBER') ? 'jber-local' : 'fairbanks-local')}>← Back</button>
                <button className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm`}
                  onClick={() => setStep('household')}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 5 — Household */}
          {step === 'household' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-8">Your household</h2>
              <div className={fieldWrap}>
                <label className={labelCls}>Total people in household (including you)</label>
                <input type="number" min={1} max={12} className={inputCls} value={form.householdSize} onChange={e => set('householdSize', e.target.value)} placeholder="e.g. 4" />
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>School-age children?</label>
                <select className={selectCls} value={form.schoolChildren} onChange={e => set('schoolChildren', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Pets?</label>
                <select className={selectCls} value={form.hasPets} onChange={e => set('hasPets', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              {form.hasPets === 'Yes' && (
                <div className={fieldWrap}>
                  <label className={labelCls}>Pet breed / size (rental restrictions matter in AK)</label>
                  <input className={inputCls} value={form.petDetails} onChange={e => set('petDetails', e.target.value)} placeholder="e.g. German Shepherd, large" />
                </div>
              )}
              <div className={fieldWrap}>
                <label className={labelCls}>How did you find us?</label>
                <select className={selectCls} value={form.source} onChange={e => set('source', e.target.value)}>
                  <option value="">Select</option>
                  <option>Google search</option>
                  <option>Referral from another service member</option>
                  <option>AHRN / Military housing site</option>
                  <option>Social media</option>
                  <option>Base housing office</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={labelCls}>Anything else we should know? (optional)</label>
                <textarea rows={3} className={inputCls} value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Orders specifics, special circumstances, questions..." />
              </div>
              <div className="flex gap-3 mt-6">
                <button className={backBtn} onClick={() => setStep('financing')}>← Back</button>
                <button className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm`}
                  onClick={() => setStep('confirm')}>
                  Review & submit →
                </button>
              </div>
            </div>
          )}

          {/* STEP 6 — Confirm */}
          {step === 'confirm' && (
            <div>
              <h2 className="font-display text-3xl tracking-tightest mb-3">Ready to send?</h2>
              <p className="text-ink/60 mb-8 leading-relaxed">Review your submission and confirm consent below. We'll reach out within the hour during Alaska business hours.</p>
              <div className="bg-paper border border-ink/10 rounded-sm p-6 mb-6 space-y-2 text-sm">
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Name</span>{form.firstName} {form.lastName}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Branch / Rank</span>{form.branch} · {form.rank}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Destination</span>{form.destinationBase}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Report Date</span>{form.reportDate || 'Not provided'}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Contact</span>{form.phone} · {form.email}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">VA Eligible</span>{form.vaEligible || 'Not answered'}</p>
                <p><span className="font-mono text-[10px] text-ink/50 uppercase tracking-wider block mb-0.5">Budget</span>{form.budgetRange || 'Not answered'}</p>
              </div>
              <label className="flex items-start gap-3 text-[11px] leading-relaxed mb-6 cursor-pointer text-ink/70">
                <input type="checkbox" className="mt-[3px] accent-copper" checked={form.tcpa} onChange={e => set('tcpa', e.target.checked)} />
                <span>
                  By submitting, I consent to be contacted by Derek Huit / Cardinal Financial Company (NMLS #66247) at the phone number and email I provided — including by autodialer, prerecorded voice, and SMS — regarding mortgage products. Consent is not a condition of any loan. Message and data rates may apply. Reply STOP to unsubscribe. See <a href="/privacy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms</a>.
                </span>
              </label>
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
              <div className="flex gap-3">
                <button className={backBtn} onClick={() => setStep('household')}>← Back</button>
                <button
                  className={`flex-1 ${COPPER_BG} transition-colors text-bone font-medium py-4 tracking-wide uppercase text-sm rounded-sm disabled:opacity-50`}
                  disabled={!form.tcpa || submitting}
                  onClick={handleSubmit}
                >
                  {submitting ? 'Sending...' : 'Submit →'}
                </button>
              </div>
            </div>
          )}

          {/* SUCCESS */}
          {step === 'success' && (
            <div className="text-center py-12">
              <div className="w-3 h-3 bg-copper rounded-full mx-auto mb-8" />
              <h2 className="font-display text-4xl tracking-tightest mb-4">We've got you.</h2>
              <p className="text-ink/70 text-lg leading-relaxed max-w-md mx-auto mb-8">
                {form.destinationBase.includes('JBER')
                  ? "A message from Derek will hit your phone shortly. We've helped over 100 JBER families close before or within days of their report date."
                  : "Derek will reach out shortly. If you're headed to the Interior, we know what that assignment actually requires. We'll make sure your housing situation is sorted before you land."}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">Questions before then?</p>
              <a href="tel:9072449368" className="font-display text-2xl text-copper tracking-tightest">(907) 244-9368</a>
              <div className="mt-10">
                <a href="/" className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60 hover:text-copper transition-colors">← Back to home</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate text-bone/70 px-5 sm:px-8 lg:px-12 py-10 mt-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] leading-relaxed text-bone/50 max-w-3xl">
            <strong className="text-bone/80">Equal Housing Lender.</strong> Derek Huit NMLS #203980 · Cardinal Financial Company, L.P. NMLS #66247 · Licensed in AK · GA · IL · IN · MI · MT · OK · TX · WA. This website is not affiliated with or endorsed by the U.S. Department of Veterans Affairs or any government agency.
          </p>
        </div>
      </footer>
    </main>
  )
}
