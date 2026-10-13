import { BASE_URL } from "@/lib/seo";
import { submitSitemap } from "@/lib/search-console";

export const dynamic = "force-dynamic";

/** Daily Vercel Cron (vercel.json): resubmits the sitemap to Google Search Console. */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const credentials = process.env.GSC_SERVICE_ACCOUNT_JSON;
  const siteUrl = process.env.GSC_SITE_URL;
  if (!credentials || !siteUrl) return Response.json({ error: "Search Console is not configured" }, { status: 503 });
  try {
    await submitSitemap(credentials, siteUrl, `${BASE_URL}/sitemap.xml`);
    return Response.json({ submitted: true, at: new Date().toISOString() });
  } catch (error) {
    // Never log credentials; status codes are enough to diagnose permissions or property mismatches.
    console.error("[sitemap-submit]", (error as Error).message);
    return Response.json({ error: "Submission failed" }, { status: 502 });
  }
}
