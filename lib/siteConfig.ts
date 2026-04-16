/**
 * Site-wide configuration — tracking IDs are read from environment variables.
 *
 * LOCAL DEVELOPMENT
 * -----------------
 * Copy .env.example to .env.local and fill in your IDs.
 * .env.local is gitignored — it never gets committed.
 *
 * PRODUCTION (Vercel / Netlify / etc.)
 * ------------------------------------
 * Set the variables in your hosting dashboard under Environment Variables.
 * After saving, click "Redeploy" — no git push needed.
 *
 * To disable a pixel, leave its variable unset or set it to an empty string.
 */

export const siteConfig = {
  analytics: {
    /** Google Analytics 4  →  NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX */
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA4_ID ?? "",

    /** Google Ads          →  NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX */
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",

    /** Meta / Facebook     →  NEXT_PUBLIC_META_PIXEL_ID=1234567890123456 */
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",

    /** TikTok              →  NEXT_PUBLIC_TIKTOK_PIXEL_ID=CXXXXXXXXXXXXXXX */
    tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "",
  },
};
