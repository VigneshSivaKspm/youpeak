import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const templatePath = path.join(DIST, "index.html");
const { render } = await import(pathToFileURL(path.join(ROOT, "dist-ssr", "entry-server.js")));

const template = await fs.readFile(templatePath, "utf8");
const appHtml = render();
if (!appHtml.includes("<h1")) throw new Error("Prerendered homepage is missing its H1");
await fs.writeFile(templatePath, template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));

const stylesheet = template.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/)?.[1];
const pages = [
  {
    slug: "privacy",
    title: "Privacy notice status",
    summary: "The complete YouPeak privacy policy has not yet been supplied or approved for publication.",
    items: [
      "The current landing-page code stores demo sign-in data in your browser only after the demo authentication flow is used.",
      "The repository does not contain an approved data-retention schedule, processor list, user-rights procedure or mobile-app privacy disclosure.",
      "Before using the app or submitting personal data, request the current approved privacy policy from support@youpeak.in.",
    ],
  },
  {
    slug: "terms",
    title: "Terms of service status",
    summary: "Binding YouPeak terms, eligibility rules and pass conditions are awaiting business and legal approval.",
    items: [
      "Pricing and earning figures on the marketing page describe current plan settings; they are not a substitute for binding terms.",
      "Cancellation, suspension, verification, expiry, taxes, disputes and governing-law terms are not confirmed in this repository.",
      "Do not purchase a pass until the applicable in-app terms have been reviewed and accepted.",
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie and local-storage notice",
    summary: "No advertising or analytics cookie implementation was found in the audited landing-page source.",
    items: [
      "The demo authentication interface can save a youpeak_user value in browser local storage.",
      "Browser, hosting and linked services may process technical request data under their own policies.",
      "An approved consent and tracking inventory is still required before non-essential tracking is introduced.",
    ],
  },
  {
    slug: "content-policy",
    title: "Content policy status",
    summary: "Detailed creator, moderation, copyright and appeals rules have not yet been approved for publication.",
    items: [
      "Do not upload content unless the in-app rules clearly confirm that you have the necessary rights and permissions.",
      "Report potentially unlawful or rights-infringing content to grievance@youpeak.in.",
      "The business must publish moderation standards, enforcement steps, appeals and repeat-infringer procedures.",
    ],
  },
  {
    slug: "earnings-disclosure",
    title: "Earnings disclosure",
    summary: "Earnings examples and calculator totals are illustrations, not promises of income or returns.",
    items: [
      "Daily and monthly amounts shown on the site are maximum caps or estimates based on selected activity assumptions.",
      "Actual eligibility, available tasks, valid activity, referrals, advertiser demand, verification, fees and payout timing can affect results.",
      "Paid passes are presented as optional feature and limit upgrades. They should not be treated as investments or guaranteed-return products.",
    ],
  },
  {
    slug: "refund-cancellation",
    title: "Refund and cancellation policy status",
    summary: "Approved refund, renewal and cancellation rules were not present in the repository at audit time.",
    items: [
      "Request the applicable written policy before purchasing any one-time or annual pass.",
      "The business must confirm refund windows, exceptions, renewal notices, cancellation steps and processing timelines.",
      "For an existing transaction, contact support@youpeak.in with non-sensitive transaction details. Never send an OTP or UPI PIN.",
    ],
  },
  {
    slug: "grievance",
    title: "Grievance contact",
    summary: "Send platform complaints and content reports to grievance@youpeak.in.",
    items: [
      "Include a concise description, the relevant URL or account reference and the outcome you are requesting.",
      "Do not send passwords, OTPs, UPI PINs, card numbers or full bank credentials.",
      "The officer's verified name, postal address and approved response timeline still require publication by the business.",
    ],
  },
  {
    slug: "contact",
    title: "Contact YouPeak",
    summary: "Use the published email channel that matches your request.",
    items: [
      "General support: support@youpeak.in",
      "Creator enquiries: creators@youpeak.in",
      "Business enquiries: business@youpeak.in",
      "Complaints and content reports: grievance@youpeak.in",
    ],
  },
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const linkifyEmail = (value) => escapeHtml(value).replace(
  /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g,
  '<a class="font-semibold text-emerald-700 underline" href="mailto:$1">$1</a>',
);

for (const page of pages) {
  const canonical = `https://www.youpeak.in/${page.slug}`;
  const html = `<!doctype html>
<html lang="en-IN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(page.title)} | YouPeak</title>
<meta name="description" content="${escapeHtml(page.summary)}">
<meta name="robots" content="noindex, follow"><link rel="canonical" href="${canonical}">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_32.png">${stylesheet ? `<link rel="stylesheet" crossorigin href="${stylesheet}">` : ""}
</head><body class="bg-slate-50 text-slate-900 antialiased"><main class="min-h-screen px-4 py-16 sm:px-6">
<article class="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
<a class="font-semibold text-emerald-700 underline" href="/">Back to YouPeak</a>
<p class="mt-10 text-xs font-bold uppercase tracking-widest text-amber-700">Draft information page - Noindex - Legal review required</p>
<h1 class="mt-3 text-4xl font-black tracking-tight">${escapeHtml(page.title)}</h1>
<p class="mt-5 text-lg leading-8 text-slate-600">${escapeHtml(page.summary)}</p>
<ul class="mt-8 list-disc space-y-4 pl-6 text-slate-700">${page.items.map((item) => `<li>${linkifyEmail(item)}</li>`).join("")}</ul>
<p class="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">Last reviewed: 29 September 2026. This page is intentionally excluded from search indexing until the underlying policy is complete and approved.</p>
</article></main></body></html>`;
  await fs.writeFile(path.join(DIST, `${page.slug}.html`), html);
}

await fs.writeFile(
  path.join(DIST, "404.html"),
  `<!doctype html><html lang="en-IN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | YouPeak</title><meta name="robots" content="noindex, nofollow">${stylesheet ? `<link rel="stylesheet" crossorigin href="${stylesheet}">` : ""}</head><body class="bg-slate-50 text-slate-900"><main class="min-h-screen px-4 py-24"><div class="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center"><p class="text-sm font-bold text-emerald-700">404</p><h1 class="mt-3 text-4xl font-black">Page not found</h1><p class="mt-4 text-slate-600">The address does not match a published YouPeak page.</p><a class="mt-8 inline-block font-bold text-emerald-700 underline" href="/">Return to the YouPeak homepage</a></div></main></body></html>`,
);

console.log(`Prerendered homepage and ${pages.length} noindex trust pages.`);
