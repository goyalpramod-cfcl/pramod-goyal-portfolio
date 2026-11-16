# How to Update & Manage Your Website (Plain-English Guide)

## 1. Where All Your Website Text Lives
Every word, headline, career role, credential, email address, and phone number on your website is stored in a single file:

- **File path:** `src/data/siteContent.ts`

You never need to touch any design or layout code. To update a sentence, add a new board role, or change your phone number:
1. Open `src/data/siteContent.ts` in any text editor (or directly on GitHub's website once deployed).
2. Change the text inside the quotation marks (`"like this"`).
3. Save the file. If connected to Vercel via GitHub, your live website updates automatically within ~45 seconds.

---

## 2. Connecting Your Contact Form to Receive Emails Directly (Web3Forms — Free)
Right now, if someone fills out your contact form, it automatically opens a pre-addressed email to `pgoyal@canadawidefinancial.ca` (or `goyal.pramod@gmail.com` for board inquiries) so you never miss a message.

If you want inquiries sent directly from the webpage without opening the visitor's email program:
1. Go to [https://web3forms.com](https://web3forms.com) (free, no login or password required).
2. Enter `pgoyal@canadawidefinancial.ca` and click **Create Access Key**.
3. Check your email inbox and copy the Access Key they send you.
4. Open `src/data/siteContent.ts`, find `web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"`, and paste your key inside the quotation marks.

---

## 3. List of Optional Placeholders Included in `src/data/siteContent.ts`
To strictly honour your rule that zero facts, clients, or numbers be invented, the public site displays **only verified facts** from your LinkedIn Profile and Executive & Board Resume. The following optional placeholders are stored in `src/data/siteContent.ts` in case you wish to add them later:
- `expertise.pillars[0].placeholderNote`: `[ADD: Optional Representative Deal Tombstones — e.g., '$[XX]M Industrial Facility Acquisition (Mississauga)' or '$[XX]M Multi-Tranche Corporate Debt Refinancing']`
- `expertise.pillars[1].placeholderNote`: `[ADD: Optional Anonymized Advisory Case Study — e.g., 'Restructured working capital and cost controls for a GTA manufacturing enterprise ahead of recapitalization']`
- `expertise.pillars[2].placeholderNote`: `[ADD: Optional Board Endorsement or Peer Reference Quote]`
- `placeholdersSection.items`: `[ADD: Client testimonial from a GTA business owner or commercial real estate borrower]` and `[ADD: Endorsement from a fellow Board Director, Institutional Lender, or Chamber Leader]` (currently hidden via `showOnSite: false` so no placeholder brackets appear on your live site).
- `footer.statutoryLicensePlaceholder`: `[ADD: Optional statutory brokerage registration numbers if required by your current brokerage affiliation]`
