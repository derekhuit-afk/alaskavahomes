"""
Build: The PCS-to-Alaska VA Buyer's Guide (14-page PDF lead magnet)
Author: Derek Huit | NMLS #203980 | Anchorage, Alaska
Powered by: Cardinal Financial Company, Limited Partnership | NMLS #66247

Unique PCS-specific VA content. Zero AHFC references.
Target audience: Active-duty military with PCS orders to Alaska.
"""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, KeepTogether
)
from reportlab.lib.enums import TA_LEFT

# Steel + military gold
STEEL = colors.HexColor("#1E2A3A")
STEEL_LIGHT = colors.HexColor("#2A3A4D")
MGOLD = colors.HexColor("#B8A15C")
INK = colors.HexColor("#1A1A1A")
MUTED = colors.HexColor("#6B7280")
RULE = colors.HexColor("#E5E7EB")
BG_LIGHT = colors.HexColor("#F2EFE6")
FLAG_RED = colors.HexColor("#9F2A26")
PAGE_W, PAGE_H = LETTER


def draw_header_footer(c, doc, is_cover=False):
    c.saveState()
    if not is_cover:
        c.setStrokeColor(RULE); c.setLineWidth(0.5)
        c.line(0.75*inch, PAGE_H - 0.55*inch, PAGE_W - 0.75*inch, PAGE_H - 0.55*inch)
        c.setFont("Helvetica", 8); c.setFillColor(MUTED)
        c.drawString(0.75*inch, PAGE_H - 0.42*inch, "THE PCS-TO-ALASKA VA BUYER'S GUIDE")
        c.drawRightString(PAGE_W - 0.75*inch, PAGE_H - 0.42*inch, f"Page {doc.page - 1}")
    c.setStrokeColor(RULE); c.setLineWidth(0.5)
    c.line(0.75*inch, 0.75*inch, PAGE_W - 0.75*inch, 0.75*inch)
    c.setFont("Helvetica-Bold", 7.5); c.setFillColor(INK)
    c.drawString(0.75*inch, 0.6*inch, "Derek Huit | NMLS #203980 | Anchorage, Alaska")
    c.drawRightString(PAGE_W - 0.75*inch, 0.6*inch, "AlaskaVAHomes.com")
    c.setFont("Helvetica", 6.5); c.setFillColor(MUTED)
    c.drawString(0.75*inch, 0.47*inch,
        "Powered by Cardinal Financial Company, Limited Partnership | NMLS #66247 | 3701 Arco Corporate Dr, Suite 200, Charlotte, NC 28273")
    c.drawString(0.75*inch, 0.36*inch,
        "NMLS Consumer Access: nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247  \u2022  Equal Housing Opportunity  \u2022  VA Approved Lender")
    c.drawString(0.75*inch, 0.25*inch,
        "Not a commitment to lend. All loans subject to credit approval, underwriting, and appraisal. Not endorsed by the VA or any government agency.")
    c.restoreState()


def cover_page(c, doc):
    c.saveState()
    c.setFillColor(STEEL)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Subtle mountain silhouette in lighter steel
    c.setFillColor(STEEL_LIGHT)
    p = c.beginPath()
    p.moveTo(0, 2.0*inch)
    p.lineTo(1.2*inch, 3.2*inch); p.lineTo(2.0*inch, 2.5*inch)
    p.lineTo(2.8*inch, 3.7*inch); p.lineTo(3.6*inch, 2.8*inch)
    p.lineTo(4.5*inch, 3.9*inch); p.lineTo(5.4*inch, 2.9*inch)
    p.lineTo(6.3*inch, 3.6*inch); p.lineTo(7.2*inch, 2.7*inch)
    p.lineTo(PAGE_W, 3.1*inch); p.lineTo(PAGE_W, 2.0*inch); p.close()
    c.drawPath(p, fill=1, stroke=0)

    # Gold accent bar
    c.setFillColor(MGOLD)
    c.rect(0.75*inch, PAGE_H - 2.2*inch, 1.5*inch, 0.08*inch, fill=1, stroke=0)

    # Eyebrow
    c.setFillColor(MGOLD); c.setFont("Helvetica-Bold", 10)
    c.drawString(0.75*inch, PAGE_H - 2.55*inch, "FOR SERVICE MEMBERS WITH PCS ORDERS TO ALASKA")

    # Title
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold", 42)
    c.drawString(0.75*inch, PAGE_H - 3.5*inch, "The PCS-to-Alaska")
    c.drawString(0.75*inch, PAGE_H - 4.1*inch, "VA Buyer's")
    c.setFillColor(MGOLD)
    c.drawString(0.75*inch, PAGE_H - 4.7*inch, "Guide.")

    # Subtitle
    c.setFillColor(colors.white); c.setFont("Helvetica", 13)
    c.drawString(0.75*inch, PAGE_H - 5.25*inch,
        "How to use your VA entitlement to buy a home in Alaska \u2014 built")
    c.drawString(0.75*inch, PAGE_H - 5.5*inch,
        "for JBER, Eielson, Fort Wainwright, and Coast Guard PCS buyers.")

    # Footer branding
    c.setFont("Helvetica-Bold", 11); c.setFillColor(colors.white)
    c.drawString(0.75*inch, 1.25*inch, "AlaskaVAHomes.com")
    c.setFont("Helvetica", 8); c.setFillColor(colors.HexColor("#C5CCD4"))
    c.drawString(0.75*inch, 1.05*inch, "Derek Huit \u2022 NMLS #203980 \u2022 18 Years \u2022 $1B+ Originated \u2022 Anchorage, AK")
    c.drawString(0.75*inch, 0.9*inch, "Powered by Cardinal Financial \u2022 NMLS #66247 \u2022 VA Approved Lender \u2022 Equal Housing Opportunity")
    c.restoreState()


def interior_page(c, doc):
    draw_header_footer(c, doc, is_cover=False)


styles = {
    "h1": ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=STEEL, spaceAfter=6),
    "h1_eyebrow": ParagraphStyle("eyebrow", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=MGOLD, spaceAfter=8),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=STEEL, spaceBefore=12, spaceAfter=4),
    "h3": ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=8, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=14.5, textColor=INK, alignment=TA_LEFT, spaceAfter=6),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=10, leading=14, textColor=INK, leftIndent=16, bulletIndent=4, spaceAfter=3),
    "caption": ParagraphStyle("caption", fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=6),
}


def P(text, style="body"): return Paragraph(text, styles[style])
def bullet(text): return Paragraph(f"\u2022 {text}", styles["bullet"])


def divider(color=RULE, thickness=0.5, space_before=6, space_after=10):
    t = Table([[""]], colWidths=[6.5*inch], rowHeights=[0.02*inch])
    t.setStyle(TableStyle([("LINEBELOW", (0,0), (-1,-1), thickness, color)]))
    return KeepTogether([Spacer(1, space_before), t, Spacer(1, space_after)])


def callout_box(title, body_html, color=MGOLD):
    data = [[Paragraph(f"<b>{title}</b>", styles["h3"])],
            [Paragraph(body_html, styles["body"])]]
    t = Table(data, colWidths=[6.3*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), BG_LIGHT),
        ("LEFTPADDING", (0,0), (-1,-1), 12), ("RIGHTPADDING", (0,0), (-1,-1), 12),
        ("TOPPADDING", (0,0), (0,0), 10), ("BOTTOMPADDING", (0,-1), (-1,-1), 10),
        ("LINEABOVE", (0,0), (-1,0), 3, color),
    ]))
    return KeepTogether([Spacer(1, 6), t, Spacer(1, 8)])


def build_story():
    s = []
    s.append(PageBreak())  # cover

    # Page 2 — Welcome
    s.append(P("A NOTE FROM DEREK", "h1_eyebrow"))
    s.append(P("You got orders to Alaska. Now what?", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("First \u2014 welcome. You're about to PCS to the most unique duty station in the military. Alaska isn't like moving from Fort Bragg to Fort Hood. The housing market runs on military rhythms, the weather dictates closing timelines, and the property types (dry cabins, permafrost zones, remote septic) will be new to you."))
    s.append(P("I've helped hundreds of service members use their VA entitlement to buy up here \u2014 JBER PCS arrivals, Eielson aircrew, Fort Wainwright soldiers, Coast Guard transfers, Reserve and Guard, disabled vets, dual-military couples. I'm in Anchorage. I know the agents, inspectors, and title companies who know the military buyer."))
    s.append(P("This guide is the playbook I give to my own PCS clients when they message me the week their orders drop. Read it on the plane. Highlight what matters to your situation. Then, when you're ready, reach out."))
    s.append(Spacer(1, 14))
    s.append(P("A few things this guide covers that most VA guides don't:", "h2"))
    s.append(bullet("How to time your VA application with your PCS report date"))
    s.append(bullet("Using your BAH to qualify \u2014 how Alaska lenders see it"))
    s.append(bullet("VA appraisal in Alaska: why it takes longer, what to expect"))
    s.append(bullet("The temp-housing window: TLE, TLA, and hotel bridging to closing"))
    s.append(bullet("Spouse income, remote-work income, and dual-military strategy"))
    s.append(Spacer(1, 14))
    s.append(P("\u2014 <b>Derek Huit</b><br/>Loan Originator | NMLS #203980<br/>Anchorage, Alaska", "body"))
    s.append(PageBreak())

    # Page 3 — PCS Timeline
    s.append(P("TIMELINE", "h1_eyebrow"))
    s.append(P("Mapping your PCS to your VA mortgage.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("The #1 PCS-VA mistake is starting the mortgage conversation too late. Here's the timeline that works:"))

    timeline = Table([
        ["Orders arrive", "Day 0", "Request your COE. Start casual conversations with a VA-fluent LO."],
        ["60\u201390 days out", "Application", "Full pre-approval. Loan estimate in hand. Start virtual house hunting."],
        ["30\u201360 days out", "Under contract", "Inspection, appraisal ordered. Remember: AK appraisals run 14\u201321 days."],
        ["14\u201330 days out", "Underwriting", "Clear conditions. Signed CD. Set closing for 2\u20133 days after arrival."],
        ["Report date", "Arrival", "Close. Get keys. Skip the 30-day hotel if timing holds."],
    ], colWidths=[1.5*inch, 1.1*inch, 3.9*inch])
    timeline.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), STEEL), ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (0,-1), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9), ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 10), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(timeline)
    s.append(Spacer(1, 10))
    s.append(callout_box("The hotel math.",
        "Every day of temp lodging eats BAH and per-diem differential. A 10-day bridge between arrival and closing is typical and manageable. A 45-day bridge because you started the VA app two weeks before arrival is brutal \u2014 and avoidable. Start the loan conversation <b>the day your orders drop</b>."))
    s.append(PageBreak())

    # Page 4 — COE + Entitlement
    s.append(P("STEP 1", "h1_eyebrow"))
    s.append(P("Your Certificate of Eligibility.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("The <b>Certificate of Eligibility (COE)</b> is the VA's document confirming you qualify for a VA home loan and how much entitlement you have. Without it, no VA loan."))
    s.append(P("Three ways to get it", "h2"))
    s.append(bullet("<b>Through me.</b> I request it on your behalf via WebLGY (the VA lender portal). Usually back in 24 hours. Free."))
    s.append(bullet("<b>Online.</b> eBenefits.va.gov or VA.gov \u2192 login \u2192 request. Takes 5\u201310 business days."))
    s.append(bullet("<b>By mail.</b> VA Form 26-1880. Takes 4\u20138 weeks. Don't do this unless you have to."))
    s.append(P("What the COE tells us", "h2"))
    s.append(bullet("<b>Eligibility status</b> \u2014 full, partial (already used some), or restored."))
    s.append(bullet("<b>Entitlement amount</b> \u2014 generally $36,000 basic + $113,275 bonus (as of 2026), used as a multiplier for no-down-payment loan limits."))
    s.append(bullet("<b>Funding fee exemption</b> \u2014 if you have a service-connected disability rating of any percentage, no funding fee. Huge savings."))
    s.append(callout_box("Already used your VA entitlement before?",
        "You can still use it again. If the prior VA loan was paid off and you sold the property, <b>one-time restoration</b> gives you your full entitlement back. If the prior loan is still active (you kept the house), you may have partial entitlement \u2014 still usable for a second VA loan in most cases. I'll pull your COE and explain exactly where you stand."))
    s.append(PageBreak())

    # Page 5 — Using BAH
    s.append(P("STEP 2", "h1_eyebrow"))
    s.append(P("Using BAH to qualify.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("This is the part most civilian LOs fumble. Your <b>Basic Allowance for Housing (BAH)</b> is qualifying income. It's non-taxable, so for conventional math it gets <b>grossed up by 25%</b>, which means a $2,500/mo BAH counts as $3,125/mo toward your DTI ratio."))
    s.append(P("2026 BAH for Alaska (enlisted sampling, with dependents)", "h2"))
    bah_table = Table([
        ["Rank", "JBER / Anchorage (ZIP 995)", "Eielson / Fairbanks (ZIP 997)", "Juneau / Kodiak"],
        ["E-5", "~$2,700", "~$2,300", "~$2,100"],
        ["E-6", "~$2,900", "~$2,500", "~$2,300"],
        ["E-7", "~$3,200", "~$2,700", "~$2,500"],
        ["O-3", "~$3,600", "~$3,000", "~$2,900"],
    ], colWidths=[0.8*inch, 1.9*inch, 1.9*inch, 1.9*inch])
    bah_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), STEEL), ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9), ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 9), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(bah_table)
    s.append(Spacer(1, 6))
    s.append(P("BAH rates update annually. These are directional \u2014 I'll pull your exact rate from your LES.", "caption"))
    s.append(P("Military income beyond BAH", "h2"))
    s.append(bullet("<b>Base pay.</b> Straightforward W-2 income from your LES."))
    s.append(bullet("<b>BAS (subsistence).</b> Also non-taxable, also grossed up. About $460/mo for enlisted."))
    s.append(bullet("<b>Special pays.</b> Flight, dive, hazardous duty, language, SRB \u2014 count if likely to continue. I'll document."))
    s.append(bullet("<b>Spouse income.</b> Fully counts. Remote-work income is fine for PCS buyers \u2014 two years of history is the standard."))
    s.append(bullet("<b>VA disability.</b> Non-taxable, grossed up. Also exempts you from the funding fee."))
    s.append(PageBreak())

    # Page 6 — VA Loan Math
    s.append(P("STEP 3", "h1_eyebrow"))
    s.append(P("VA loan math \u2014 what you actually get.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("VA loans have five major advantages over conventional or FHA financing. Here's each one, with the real-dollar impact on a $450,000 Alaska home:"))

    math_table = Table([
        ["Advantage", "What it means", "Your savings"],
        ["Zero down payment", "0% down vs 5\u201320% down", "$22,500\u2013$90,000 cash stays in your pocket"],
        ["No PMI", "No mortgage insurance, ever", "~$250\u2013$400/mo forever"],
        ["Seller-paid closing", "Seller can pay up to 4% of concessions", "Up to $18,000 off your closing costs"],
        ["Lower rates", "VA loans typically rate 0.25\u20130.5% below conventional", "~$70\u2013$130/mo on a $400K loan"],
        ["No funding fee (disabled)", "Any service-connected disability rating", "$11,250 saved on 2.15% first-use funding fee"],
    ], colWidths=[1.8*inch, 2.1*inch, 2.6*inch])
    math_table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), STEEL), ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9), ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 9), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(math_table)
    s.append(Spacer(1, 12))
    s.append(P("The VA funding fee \u2014 understood", "h2"))
    s.append(P("The only real \"cost\" of a VA loan is the one-time <b>funding fee</b>, which goes to the VA to keep the program running. For first-time use with zero down, it's <b>2.15%</b> of the loan amount (2.4% for Reserves/Guard). You can roll it into the loan \u2014 no out-of-pocket. And if you have any VA disability rating, you're exempt entirely."))
    s.append(callout_box("A note on \"VA loan limits\" in 2026.",
        "If you have full VA entitlement, there is <b>no loan limit</b> \u2014 you can borrow whatever you qualify for with zero down. The \"conforming loan limit\" only matters if you have partial entitlement left. Most first-time VA users in Alaska face no limit in practice."))
    s.append(PageBreak())

    # Page 7 — AK Property Quirks
    s.append(P("STEP 4", "h1_eyebrow"))
    s.append(P("What to watch for in Alaska property.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("VA loans have property condition standards called <b>Minimum Property Requirements (MPRs)</b>. In Alaska, these are stricter than most states because of climate and rural property realities. Here's the list:"))
    s.append(P("The MPR traps in Alaska", "h2"))
    s.append(bullet("<b>Heating.</b> The home must have a permanent, code-compliant heat source capable of maintaining 50\u00b0F in living areas. Wood stove alone = fails. Oil/gas/electric primary = passes."))
    s.append(bullet("<b>Potable water.</b> On a well? Must have a current water potability test (within ~90 days) and demonstrated flow rate."))
    s.append(bullet("<b>Wastewater.</b> Septic must be within code distance from well. Permitted only. On-site septic needs a recent \u201cas-built\u201d certificate from MOA, Mat-Su, FNSB, or KPB."))
    s.append(bullet("<b>Dry cabins.</b> Common in Fairbanks/North Pole. No running water = VA will not lend. Period. Be aware shopping Interior."))
    s.append(bullet("<b>Permafrost.</b> Requires documentation. Foundation settlement issues will kill the loan. Appraiser flags these."))
    s.append(bullet("<b>Oil tank.</b> Buried oil tanks are an MPR and environmental issue. Insurance and VA both scrutinize. Above-ground preferred."))
    s.append(bullet("<b>Roof.</b> Must have 2+ years of expected life. Snow-load damage is common in the Valley."))
    s.append(bullet("<b>Access.</b> Home must have year-round road access. Seasonal-access cabins on the Peninsula/Kenai: no-go for VA."))
    s.append(callout_box("A practical PCS move:",
        "Before you write offers, tell your agent \u201cVA-approved properties only.\u201d A good Alaska buyer's agent knows within 30 seconds of looking at a listing whether it'll pass MPRs. This saves you from falling in love with a place the VA won't finance."))
    s.append(PageBreak())

    # Page 8 — Temp housing & timing
    s.append(P("STEP 5", "h1_eyebrow"))
    s.append(P("Temp housing, TLE, and the closing bridge.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("Most PCS buyers can't inspect their new home before arriving in Alaska. You'll fly in, hit temp lodging, and close a few days or weeks later. Here's how to manage that gap:"))
    s.append(P("Temp lodging entitlements", "h2"))
    s.append(bullet("<b>TLE (CONUS).</b> Up to 14 days at departure/arrival CONUS duty stations. Alaska is CONUS for TLE purposes \u2014 use it."))
    s.append(bullet("<b>TLA (OCONUS).</b> Some bases classify as OCONUS. For Alaska, TLA is used at entry points for incoming OCONUS-to-AK transfers via Elmendorf. Check your orders."))
    s.append(bullet("<b>BAH starts immediately.</b> The day you report, BAH kicks in \u2014 even if you're in temp lodging. That money is yours."))
    s.append(bullet("<b>Lodging-in-kind.</b> If installation TLF is full, your command can authorize commercial lodging on receipt. Keep every hotel receipt."))
    s.append(P("Smart closing-bridge strategies", "h2"))
    s.append(bullet("<b>Close before you report.</b> If your orders allow, close on leave a week before report date. Move in immediately. No TLF at all."))
    s.append(bullet("<b>Delayed closing.</b> Write \"closing to occur within 5 days of buyer's report date\" into your contract. Sellers in peak season will usually accept."))
    s.append(bullet("<b>Occupancy clause.</b> VA requires you to occupy the home within 60 days of closing in most cases. Spouse occupancy counts for active-duty buyers who can't get there yet."))
    s.append(bullet("<b>Rent-back.</b> Your seller stays 30 days after close, pays you rent. Works well when your movers have a delay."))
    s.append(PageBreak())

    # Page 9 — Base-by-base
    s.append(P("BASE-BY-BASE", "h1_eyebrow"))
    s.append(P("The four installation markets.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("Where you'll be stationed matters for where you should buy. Here's the quick read on each Alaska installation:"))
    s.append(P("JBER \u2014 Joint Base Elmendorf-Richardson (Anchorage)", "h2"))
    s.append(P("Largest military population in Alaska. Army (USARAK) + Air Force (11th AF). Commute from South Anchorage, Eagle River (20 min), or Wasilla (45\u201360 min). Strong resale market. Median SFH around $450K. Best for buyers who want city access + base proximity."))
    s.append(P("Eielson AFB (near Fairbanks)", "h2"))
    s.append(P("F-35 wing + Red Flag Alaska exercises. 25-minute drive to downtown Fairbanks. Lower home prices (median SFH around $325K), but longer winters, dry cabin culture in the hills. Best for PCS buyers who prioritize space over urban amenities."))
    s.append(P("Fort Wainwright (Fairbanks)", "h2"))
    s.append(P("Army arctic training. Adjacent to Eielson market but closer to Fairbanks proper. Same home-price tier as Eielson. Watch heating costs carefully \u2014 can exceed $500/mo in winter."))
    s.append(P("Coast Guard (Kodiak, Juneau, Valdez, Ketchikan)", "h2"))
    s.append(P("Specialized markets, limited inventory. Kodiak has the largest CG presence. Juneau has the most normal housing market of the SE Alaska CG posts. USDA eligibility throughout most of these areas \u2014 zero down option alongside VA."))
    s.append(PageBreak())

    # Page 10 — Costs
    s.append(P("THE MONEY", "h1_eyebrow"))
    s.append(P("Cash you'll actually need for a VA purchase.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("The VA's zero-down loan means you need <i>far</i> less cash than most first-time buyers. Here's the real breakdown for a <b>$425,000 Alaska home</b> with VA:"))
    costs = Table([
        ["Cost Line Item", "VA Loan", "Conventional (comparison)"],
        ["Down Payment", "$0", "$21,250 (5%) \u2013 $85,000 (20%)"],
        ["Funding Fee (first-use, rolled)", "Rolled in loan ($9,140)", "N/A"],
        ["Funding Fee (disabled vet)", "$0 \u2014 EXEMPT", "N/A"],
        ["Appraisal", "$725\u2013$1,200 (VA AK premium)", "$650\u2013$1,000"],
        ["Home Inspection", "$500\u2013$800", "$500\u2013$800"],
        ["Title + Settlement", "$2,100\u2013$4,250", "$2,100\u2013$4,250"],
        ["Prepaid Taxes + Insurance", "$3,000\u2013$6,500", "$3,000\u2013$6,500"],
        ["Recording + Transfer", "$200\u2013$600", "$200\u2013$600"],
        ["TOTAL CASH NEEDED", "$6,500\u2013$13,400*", "$27,750\u2013$97,000"],
    ], colWidths=[2.5*inch, 1.9*inch, 1.9*inch])
    costs.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), STEEL), ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9), ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-2,-1), [colors.white, BG_LIGHT]),
        ("BACKGROUND", (0,-1), (-1,-1), MGOLD),
        ("FONTNAME", (0,-1), (-1,-1), "Helvetica-Bold"),
        ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING", (0,0), (-1,-1), 9), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(costs)
    s.append(Spacer(1, 6))
    s.append(P("*Before seller concessions. With 4% seller-paid closing, out-of-pocket can drop to $0\u2013$2,000 for a disabled vet.", "caption"))
    s.append(P("The seller-concession lever", "h2"))
    s.append(P("The VA allows sellers to pay up to <b>4% of the sales price</b> in concessions. That's <b>$17,000</b> on a $425K home. For PCS buyers especially \u2014 in slower seasons \u2014 this is very achievable. I've had dozens of VA closings where the vet walked in with zero out-of-pocket beyond the earnest money."))
    s.append(PageBreak())

    # Page 11 — Mistakes
    s.append(P("AVOID", "h1_eyebrow"))
    s.append(P("5 mistakes PCS-VA buyers make.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("#1 \u2014 Starting the VA conversation too late.", "h2"))
    s.append(P("The single most common mistake. Orders drop with a 60-day report date, service member starts house-hunting 30 days out, gets pre-approved 21 days out, closes in temp lodging at day 45. Don't do this. Start <b>the day your orders are cut</b>."))
    s.append(P("#2 \u2014 Assuming any lender knows VA loans.", "h2"))
    s.append(P("Many LOs do <5 VA loans a year. They miss entitlement restoration, funding fee exemptions, BAH gross-up math, MPR quirks, and occupancy rules. Use a lender who does VA every week. I close 40+ VA loans/year."))
    s.append(P("#3 \u2014 Buying a dry cabin in the Interior.", "h2"))
    s.append(P("VA won't finance a home without running water. Period. This catches Fairbanks-bound E-5s every PCS cycle because dry cabins are the cheap-entry housing stock. Don't fall in love with one."))
    s.append(P("#4 \u2014 Forgetting the occupancy requirement.", "h2"))
    s.append(P("VA requires you to occupy the home within 60 days in most cases. If your orders delay, your active-duty spouse can satisfy occupancy. Planning to rent it out right away? That's a conventional loan, not VA."))
    s.append(P("#5 \u2014 Paying the funding fee when you don't have to.", "h2"))
    s.append(P("If you have <b>any</b> VA service-connected disability rating \u2014 even 10% \u2014 you're exempt from the funding fee. That's $9,000+ on a $425K home. Get your rating confirmed <i>before</i> closing, not after."))
    s.append(PageBreak())

    # Page 12 — PCS Checklist
    s.append(P("CHECKLIST", "h1_eyebrow"))
    s.append(P("Your PCS-VA 60-day checklist.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("Print this. Work it top-to-bottom from the day orders arrive."))
    pcs_items = [
        ("Day 1: Orders arrive \u2014 screenshot and file securely", "Day 1"),
        ("Day 1: Request Certificate of Eligibility (COE) via lender", "Day 1"),
        ("Day 1\u20133: Pull latest LES + last 2 years W-2s", "Week 1"),
        ("Day 1\u20133: Gather 2 months of bank statements (all pages)", "Week 1"),
        ("Day 3\u20135: Confirm VA disability rating status (for fee exemption)", "Week 1"),
        ("Day 3\u20135: Get pre-approval letter in hand", "Week 1"),
        ("Day 5\u201310: Interview AK buyer's agents who work military clients", "Week 2"),
        ("Day 10\u201320: Virtual tours / submit offers with VA pre-approval", "Weeks 2\u20133"),
        ("Day 20\u201330: Under contract, inspection + appraisal ordered", "Weeks 3\u20134"),
        ("Day 30\u201345: Underwriting; respond to conditions within 24hrs", "Weeks 4\u20136"),
        ("Day 40\u201355: Clear to Close, review Closing Disclosure", "Weeks 6\u20138"),
        ("Day 55\u201360: Final walkthrough (by proxy if not yet in AK)", "Week 8"),
        ("Report Day: Close \u2014 sign in AK or via mobile notary pre-travel", "Day 60"),
        ("Day 61+: Meet occupancy requirement within 60 days of close", "Post-close"),
    ]
    chk = [["", "Task", "Target"]]
    for item, when in pcs_items:
        chk.append(["\u2610", item, when])
    chk_t = Table(chk, colWidths=[0.35*inch, 4.75*inch, 1.1*inch])
    chk_t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), STEEL), ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,-1), 9), ("LEADING", (0,0), (-1,-1), 12),
        ("LINEBELOW", (0,0), (-1,-1), 0.4, RULE),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, BG_LIGHT]),
        ("TOPPADDING", (0,0), (-1,-1), 6), ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING", (0,0), (-1,-1), 9),
        ("ALIGN", (0,0), (0,-1), "CENTER"), ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    s.append(chk_t)
    s.append(PageBreak())

    # Page 13 — Why Me
    s.append(P("WHY ME", "h1_eyebrow"))
    s.append(P("Who you're actually working with.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(P("Thousands of LOs can do VA loans on paper. A much smaller number actually do them every week. Here's why a VA-fluent, Alaska-based LO matters for your PCS."))
    s.append(P("VA is my top volume category", "h2"))
    s.append(P("Alaska has one of the highest military populations per capita in the country. A huge portion of my volume is VA. I work PCS timelines constantly \u2014 incoming and outgoing, active and Guard, retiring and separating. I know the forms, the WebLGY portal, and the VA appraisers in Anchorage/Fairbanks personally."))
    s.append(P("Cardinal Financial is a VA direct lender", "h2"))
    s.append(P("Cardinal Financial (NMLS #66247) is a VA-approved direct lender. That means in-house underwriting on VA loans \u2014 no correspondent middlemen slowing down your PCS timeline. Their Octane platform keeps you looped in 24/7 via your phone, which matters when you're deployed or TDY."))
    s.append(P("Based in Anchorage \u2014 same time zone as your orders", "h2"))
    s.append(P("I'm in Anchorage. When you call at 6pm after work, I'm awake. When you text on a Saturday during a house tour, I respond. No East Coast call center, no \"your loan officer will call you Monday.\""))
    s.append(Spacer(1, 12))
    s.append(callout_box("What PCS clients get from me, guaranteed:",
        "\u2022 COE requested within 24 hours of first contact<br/>"
        "\u2022 Pre-approval letter within 48 business hours<br/>"
        "\u2022 Text-message response within 1 business hour, 7am\u20137pm AKT<br/>"
        "\u2022 Every important thing in writing (email), so your spouse is on the same page<br/>"
        "\u2022 Referrals to VA-fluent Alaska buyer's agents and military-friendly inspectors"))
    s.append(PageBreak())

    # Page 14 — CTA
    s.append(Spacer(1, 28))
    s.append(P("READY?", "h1_eyebrow"))
    s.append(P("When your orders drop, here's the move.", "h1"))
    s.append(divider(color=MGOLD, thickness=2))
    s.append(Spacer(1, 6))
    s.append(P("Whether you're 90 days out or already sitting in TLF at Elmendorf reading this on your phone \u2014 the next step is the same: apply. Pre-approval is free, soft-credit, no obligation. You'll have your Certificate of Eligibility in hand in 24 hours."))
    s.append(Spacer(1, 14))
    cta_data = [
        [Paragraph("<b>Start your VA application</b>", ParagraphStyle("cta_h", fontName="Helvetica-Bold", fontSize=15, textColor=colors.white, leading=18))],
        [Paragraph('<font color="#FFFFFF">Soft credit pull. Real pre-approval within 24 business hours. COE requested on your behalf at no cost.</font>', styles["body"])],
        [Paragraph('<font color="#B8A15C"><b>\u2192 AlaskaVAHomes.com</b></font>', ParagraphStyle("cta_link", fontName="Helvetica-Bold", fontSize=14, textColor=MGOLD, leading=18))],
    ]
    cta_t = Table(cta_data, colWidths=[6.3*inch])
    cta_t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), STEEL), ("TEXTCOLOR", (0,0), (-1,-1), colors.white),
        ("LEFTPADDING", (0,0), (-1,-1), 20), ("RIGHTPADDING", (0,0), (-1,-1), 20),
        ("TOPPADDING", (0,0), (0,0), 18), ("TOPPADDING", (0,1), (0,1), 6), ("TOPPADDING", (0,2), (0,2), 12),
        ("BOTTOMPADDING", (0,-1), (-1,-1), 20),
    ]))
    s.append(cta_t)
    s.append(Spacer(1, 18))
    s.append(P("Or reach me directly:", "h2"))
    s.append(bullet("<b>Website:</b> AlaskaVAHomes.com"))
    s.append(bullet("<b>NMLS Lookup:</b> nmlsconsumeraccess.org \u2014 search #203980"))
    s.append(bullet("<b>Licensing:</b> cardinalfinancial.com/nmls-licensing"))
    s.append(Spacer(1, 16))
    s.append(P("<b>Thank you for your service.</b> Whatever happens from here \u2014 whether you work with me or another LO \u2014 I hope this guide saved you time, money, and some stress during a busy PCS.", "body"))
    s.append(Spacer(1, 6))
    s.append(P("\u2014 Derek", "body"))
    return s


def build(outfile="guide.pdf"):
    doc = BaseDocTemplate(
        outfile, pagesize=LETTER,
        leftMargin=0.75*inch, rightMargin=0.75*inch,
        topMargin=0.9*inch, bottomMargin=0.95*inch,
        title="The PCS-to-Alaska VA Buyer's Guide",
        author="Derek Huit | NMLS #203980 | Anchorage, Alaska",
        subject="A 14-page VA home loan guide for service members with Alaska PCS orders",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    cover = PageTemplate(id="Cover", frames=[frame], onPage=cover_page)
    interior = PageTemplate(id="Interior", frames=[frame], onPage=interior_page)
    doc.addPageTemplates([cover, interior])
    doc.build(build_story())
    print(f"Built: {outfile}")


if __name__ == "__main__":
    import sys, os
    out = sys.argv[1] if len(sys.argv) > 1 else "guide.pdf"
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    build(out)
