import { createSign } from "node:crypto";

type ServiceAccount = { client_email: string; private_key: string };

const base64url = (value: string | Buffer) => Buffer.from(value).toString("base64url");

/** OAuth access token for a Google service account (JWT bearer grant), without extra dependencies. */
async function accessToken({ client_email, private_key }: ServiceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({
    iss: client_email,
    scope: "https://www.googleapis.com/auth/webmasters",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 600,
  }));
  const signature = createSign("RSA-SHA256").update(`${header}.${claims}`).sign(private_key, "base64url");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${header}.${claims}.${signature}` }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw Error(`Google token request failed (${response.status})`);
  return (await response.json() as { access_token: string }).access_token;
}

/**
 * Resubmits the sitemap to Search Console. Equivalent to pressing "Enviar" in the UI:
 * Google still decides when to crawl it.
 * `siteUrl` is the property as shown in Search Console: `sc-domain:example.com` or `https://www.example.com/`.
 */
export async function submitSitemap(credentialsJson: string, siteUrl: string, sitemapUrl: string) {
  const account = JSON.parse(credentialsJson) as ServiceAccount;
  if (!account.client_email || !account.private_key) throw Error("Invalid service account credentials");
  const token = await accessToken(account);
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  const response = await fetch(endpoint, { method: "PUT", headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw Error(`Search Console rejected the sitemap (${response.status})`);
}
