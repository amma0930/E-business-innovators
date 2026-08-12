/* Case studies. Client names, logos, screenshots and the real before/after
   numbers are placeholders — replace with verified data before publishing.
   Powers /work and each /work/<slug>/ detail page. */
module.exports = [
  {
    slug: "home-services-lead-capture",
    client: "[Client name]",
    industry: "Home services",
    category: "AI Voice & Automation",
    summary: "Missed after-hours calls were going to voicemail and then to competitors. We put an AI receptionist and automated follow-up in front of every enquiry.",
    problem: "The business relied on the owner answering the phone. Calls that came in during jobs, evenings and weekends went to voicemail, and most callers never rang back — they simply called the next company on the list.",
    built: [
      "AI voice receptionist that answers every call and books qualified jobs",
      "Automated SMS + email follow-up for missed calls and new enquiries",
      "CRM and calendar kept in sync so nothing is entered twice"
    ],
    stack: ["AI voice agent", "n8n", "CRM", "Calendar", "SMS/email"],
    timeline: "[X] weeks",
    results: [
      { label: "Missed calls answered", before: "[before]", after: "[after]" },
      { label: "Jobs booked / month", before: "[before]", after: "[after]" },
      { label: "Lead response time", before: "[before]", after: "[after]" }
    ]
  },
  {
    slug: "local-service-seo-website",
    client: "[Client name]",
    industry: "Local service business",
    category: "Web + SEO",
    summary: "A slow, hard-to-find site was invisible in local search. We rebuilt it for speed and conversion and put local SEO foundations in place.",
    problem: "The existing website was slow, not mobile-friendly and buried past the first page for the searches customers actually used. Enquiries through the site were rare, and the map pack was dominated by competitors.",
    built: [
      "Fast, mobile-first website rebuilt around clear calls to action",
      "Local SEO foundations: Google Business Profile, on-page and location content",
      "Lead capture and analytics wired in from day one"
    ],
    stack: ["Static site", "Local SEO", "Google Business Profile", "Analytics"],
    timeline: "[X] weeks",
    results: [
      { label: "Map-pack visibility", before: "[before]", after: "[after]" },
      { label: "Organic enquiries / mo", before: "[before]", after: "[after]" },
      { label: "Mobile load time", before: "[before]", after: "[after]" }
    ]
  },
  {
    slug: "professional-firm-automation",
    client: "[Client name]",
    industry: "Professional services",
    category: "Automation + Finance",
    summary: "Manual follow-ups and messy books were eating hours every week. We automated the busywork and brought reporting up to date.",
    problem: "Lead follow-up was manual and inconsistent, and monthly numbers were always weeks behind. The team spent hours on data entry and reconciliation instead of client work.",
    built: [
      "Automated lead follow-up and handoffs across the team's tools",
      "Bookkeeping cleaned up and brought current, with monthly reporting",
      "Plain-English dashboard tying activity to leads and revenue"
    ],
    stack: ["n8n", "CRM", "Bookkeeping", "Reporting"],
    timeline: "[X] weeks",
    results: [
      { label: "Hours saved / week", before: "[before]", after: "[after]" },
      { label: "Follow-up coverage", before: "[before]", after: "[after]" },
      { label: "Reporting lag", before: "[before]", after: "[after]" }
    ]
  }
];
