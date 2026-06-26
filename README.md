# Henan Sitong Boiler — Bangladesh Authorized Partner

Marketing website for Henan Sitong Boiler's Bangladesh market, operated by Keystone Consultancy.

**Live URL:** henan-sitong-bangladesh.vercel.app

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (blue + green + white brand palette)
- **TypeScript**
- **nodemailer** (quote form email delivery)

## Sections

1. Fixed navigation with mobile hamburger menu
2. Hero — headline, CTAs, social proof stats
3. Trust bar — ISO 9001, 50+ countries, BD compliance, local service
4. Lifespan Alert — Boiler Rules 2025 urgency banner
5. About — company credentials and Bangladesh presence
6. Why Us — 4 pillars: proven in BD, cost savings, compliance, local service
7. Products — 8 boiler model cards (WNS, SZS, DZL, SZL, biomass, condensing, thermal oil)
8. TDF/Green Fund — Bangladesh Bank financing at 5% interest
9. Compliance — full documentation checklist + 6-step process timeline
10. After-Sales — 6 local service offerings + Keystone Consultancy CTA
11. Quote Form — 8-field form with AJAX submission, success/error states
12. Footer — contact, nav, SEO keywords

## Local Development

```bash
npm install
npm run dev
```

## Deployment to Vercel

1. Connect the GitHub repo to Vercel
2. Set environment variables in Vercel dashboard:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=munimm247@gmail.com
SMTP_PASS=<Gmail app-specific password>
TO_EMAIL=munimm247@gmail.com
```

To create a Gmail app password: Gmail Settings → Security → 2-Step Verification → App Passwords

3. Deploy — Vercel auto-detects Next.js

## Contact Info (hardcoded in site)

- Phone/WhatsApp: +8801941646278
- Email: munimm247@gmail.com
- WeChat: hasibul_munim
- Location: Gazipur, Dhaka Division, Bangladesh
- Hours: Saturday–Thursday, 9:00 AM – 6:00 PM (BST)
