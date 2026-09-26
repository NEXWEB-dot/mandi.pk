# mandi.pk — Product Requirements Document
**Competition:** Imaginathon — claim a city, research it, solve a real problem there
**City:** Karachi
**Team:** 4 (incl. fhdj)

---

## 1. Overview

mandi.pk is a trust-first marketplace connecting Karachi's mandi beparis (livestock sellers) with Qurbani buyers. It doesn't try to replace the mandi visit — it removes the wasted parts of it: blind pricing, wasted trips, and chaotic multi-buyer negotiations — while keeping the part that actually matters to buyers: seeing and negotiating for the animal in person before paying.

## 2. The Karachi problem (why this city, why this problem)

Buying a Qurbani animal in Karachi today means:
- **No trust in photos** — buyers won't commit to an animal's age, weight, or health without seeing it in person
- **No price reference** — buyers walk into the mandi blind, with no idea what a fair price looks like for a given breed/weight
- **Wasted mandi visits** — hours spent wandering between beparis with no way to plan ahead
- **Chaotic negotiations** — multiple buyers converge on the same animal with no order or fairness

This is a real, recurring friction point in Karachi's informal economy every Qurbani season, not a hypothetical problem — and existing apps (BakraOnline.pk, SK Livestock, Bakra Mandi, Daraz Mandi, OLX) all try to solve it by pushing buyers toward trusting photos and skipping the visit, which doesn't match how buyers actually decide. mandi.pk is built around keeping the mandi visit but making it efficient.

## 3. Goals

- A working, demoable platform for Imaginathon judging and the community Discord vote
- Prove the mechanics of trust (verified beparis), fairness (booked slots), and price transparency (browsable catalog) in a real Karachi context
- A foundation that can genuinely launch for Eid-ul-Adha 2027 (~8 months out), not just a one-off demo

## 4. Target users

- **Customers** — Qurbani buyers in Karachi comparing animals by breed, weight, and price before visiting a mandi
- **Beparis** — mandi livestock sellers, each typically holding 50–100 animals in stock

## 5. Core features

### 5.1 Two dashboards
A customer-facing website and a separate bepari dashboard — different roles, different tools.

### 5.2 Bepari onboarding & listings
- Beparis send verified, daylight photos/videos of their stock from the mandi
- Listings filterable by **breed, weight, price, gender**; nav split into **Beparis** and **Cows**
- Bepari profile pages show their full catalog, ratings, and reviews — letting customers gauge current market rates just by browsing

### 5.3 Trust & verification
- Beparis earn a **verified badge** after a sales-volume threshold with honest 5-star reviews
- Only verified/trusted beparis are surfaced on the platform — trust is the core product, not an add-on

### 5.4 No direct "Order Now" (by design)
The customer-facing site has no purchase button. A customer marks an animal "interested," then calls/messages the bepari with the photo to negotiate price directly — this avoids the liability of the platform facilitating an unseen sale.

### 5.5 Slot booking
- Customer books a 30-minute viewing slot (e.g. 7:00–7:30, 7:30–8:00) to see a specific animal in person
- Other customers can book other slots for the same animal — no more multiple buyers converging at once

### 5.6 Bepari-initiated order confirmation
After a successful in-person negotiation, the **bepari** (not the customer) opens his dashboard, selects the specific animal being bought, and enters the agreed price — this is how the platform knows which animal sold, without needing a purchase button on the public site.

### 5.7 Transparent payment split
The customer's total payment equals exactly the negotiated price, split into two payments:
- **5% commission** — paid by the customer directly to mandi.pk online, at order confirmation
- **95% of the price** — paid by the customer directly to the bepari, online or cash

mandi.pk never holds the animal's sale price — only its own commission. *(See TRD §5 for the worked example.)*

### 5.8 Reviews
After payment, the bepari prompts the customer for a star rating, feeding directly into the badge/ranking system.

### 5.9 Status alerts (keeps listings accurate)
When a booked slot ends, the bepari gets a prompt: **"Was this animal sold? Yes/No."** One tap, tied to a real event — this is what keeps the catalog accurate without relying on the bepari remembering to update it unprompted.

### 5.10 Cash-sale reconciliation
If a sale happens off-platform in cash, the bepari marks the animal sold on the site; mandi.pk reconciles weekly and collects the commission owed afterward.

### 5.11 Order tracking
A dashboard view of all orders, including desired delivery day.

### 5.12 Repeat-customer shortcut
Returning customers can pick a previously used, verified bepari and go straight to a request-to-see-animal, skipping cold browsing.

### 5.13 Multi-animal discount
Customers buying 2+ animals at once get a discount, funded out of mandi.pk's own commission (not the bepari's cut).

### 5.14 Year-round hook: growth tracking
Customers who buy a calf can track its growth in-app via periodic bepari-submitted photos, with automatic reminders prompting the bepari to send updates — this is what gives mandi.pk a reason to stay active outside Qurbani season.

### 5.15 Future (post-traction, not in this build)
Verified, CNIC-checked truck drivers customers can browse and book for delivery, with free delivery subsidized by commission on 2+ animal orders.

## 6. Business model

**5% commission per sale**, collected as described in §5.7. Example on a PKR 250,000 animal: customer pays mandi.pk PKR 12,500 online, pays the bepari PKR 237,500 directly — total exactly PKR 250,000, the negotiated price.

## 7. Design direction (already decided)

- **Brand name:** mandi.pk
- **Colors:** white & brown (warm, earthy, trustworthy — deliberately not a slick tech-startup palette), with a gold accent for CTAs and verified badges
- **Tone:** authentic over flashy — matches a livestock marketplace where trust matters more than polish

## 8. Competitive landscape

| Platform | What's missing |
|---|---|
| BakraOnline.pk | No in-person booking or price-blind trust fix |
| SK Livestock | Built for year-round retail, not mandi trust |
| Bakra Mandi (app) | Plain listings, no verification or slots |
| Daraz Mandi | Generic e-commerce flow, no mandi experience |
| OLX Pakistan | Highest traffic, but zero trust or structure |

**Our edge:** verified beparis + booked in-person viewing + transparent pricing, in one flow — nobody else owns the trust problem.

## 9. Marketing plan

- Instagram, 2 days a week — steady, low-burnout content cadence
- TikTok & Facebook — where beparis already spend their time; primary outreach channels
- Sindhi-speaking outreach — direct conversations with beparis in their own language, building trust early
- Verified-only positioning markets itself — the badge system is also the pitch

## 10. Timeline

- **Real-world runway:** Eid-ul-Adha 2027 falls ~17 May 2027 — about 8 months from today. The actual launch doesn't need to be rushed; beparis need real onboarding and trust-building first.
- **Competition build:** for Imaginathon, scope down to a demoable slice — real UI/UX for both dashboards, the full booking → confirm → split-payment flow, and the alert mechanic, all running on **dummy beparis and dummy listings** rather than live mandi data. Payment can be simulated rather than wired to a live gateway for the demo (see TRD §8).

## 11. Success criteria for the competition build

- [ ] Customer can browse dummy listings, filter by breed/weight/price/gender
- [ ] Customer can view a bepari's profile and catalog
- [ ] Customer can book a 30-minute slot on an animal
- [ ] Bepari dashboard can confirm an order against a specific animal + booked slot
- [ ] Payment split (5% / 95%) is shown clearly in the confirmation flow, even if simulated
- [ ] Slot-end alert prompts the bepari yes/no on the sale
- [ ] Deployed and reachable at a live URL for judging

See the companion TRD for data model, architecture, and security.
