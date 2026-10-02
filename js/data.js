/* Public facts only. Do not invent listings, prices, license numbers,
   photos, size, or floor plans.
   A listing may set intent to "rent" or "sale". Set open: true only when
   someone can move in now. Commercial search matches Commercial,
   Mixed-use, Office, and Retail. */
const DRAKA = {
  name: "Drakca",
  firm: "DL Management",
  contact: {
    phone: "202-413-9222",
    phoneHref: "tel:+12024139222",
    email: "drakaLLC@gmail.com",
    emailHref: "mailto:drakaLLC@gmail.com",
  },
  base: "Bethesda, Maryland",
  markets: ["Maryland", "Virginia", "Washington, D.C."],
  people: [
    {
      name: "Chantal",
      role: "Principal",
    },
    {
      name: "Lisette Attias",
      role: "Principal",
    },
  ],
  properties: [
    {
      id: "lansdowne-1607",
      name: "1607 Lansdowne Way",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "1607 Lansdowne Way",
      price: "$6,000/month",
      available: "December 2026",
      summary: "For lease at $6,000 a month, available December 2026.",
      story: [
        "1607 Lansdowne Way in Silver Spring is offered for lease at $6,000 a month, available December 2026.",
        "The office can confirm the size and the rest of the lease terms, and a time to see it. Those details are posted when they are confirmed.",
      ],
    },
  ],
};
