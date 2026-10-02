/* Public facts only. Do not invent listings, prices, license numbers,
   photos, size, or floor plans.
   Vacancies are the addresses and units from the office vacancy list.
   Rent is included only when the office has confirmed it.
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
    { name: "Chantal", role: "Principal" },
    { name: "Lisette Attias", role: "Principal" },
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
        "The office can confirm the size and the rest of the lease terms, and a time to see it. Those details are posted when they are confirmed."
      ]
    },
    {
      id: "11212-grandview-avenue-unit-103",
      name: "11212 Grandview Avenue, Unit 103",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Wheaton",
      street: "11212 Grandview Avenue",
      unit: "Unit 103",
      available: "Now",
      open: true,
      summary: "Unit 103 at 11212 Grandview Avenue in Wheaton, Maryland is vacant and available now.",
      story: [
        "Unit 103 at 11212 Grandview Avenue in Wheaton, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "11212-grandview-avenue-unit-107",
      name: "11212 Grandview Avenue, Unit 107",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Wheaton",
      street: "11212 Grandview Avenue",
      unit: "Unit 107",
      available: "Now",
      open: true,
      summary: "Unit 107 at 11212 Grandview Avenue in Wheaton, Maryland is vacant and available now.",
      story: [
        "Unit 107 at 11212 Grandview Avenue in Wheaton, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "1220-n-street-northwest-unit-4-a",
      name: "1220 N Street Northwest, Unit 4-A",
      intent: "rent",
      type: "Residential",
      state: "Washington, D.C.",
      street: "1220 N Street Northwest",
      unit: "Unit 4-A",
      available: "Now",
      open: true,
      summary: "Unit 4-A at 1220 N Street Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "Unit 4-A at 1220 N Street Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "1530-key-boulevard-atrium-104",
      name: "1530 Key Boulevard, Atrium 104",
      intent: "rent",
      type: "Residential",
      state: "Virginia",
      neighborhood: "Arlington",
      street: "1530 Key Boulevard",
      unit: "Atrium 104",
      available: "Now",
      open: true,
      summary: "Atrium 104 at 1530 Key Boulevard in Arlington, Virginia is vacant and available now.",
      story: [
        "Atrium 104 at 1530 Key Boulevard in Arlington, Virginia is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "1728-1730-connecticut-avenue-northwest-lower-level",
      name: "1728-1730 Connecticut Avenue Northwest, Lower Level",
      intent: "rent",
      type: "Commercial",
      state: "Washington, D.C.",
      street: "1728-1730 Connecticut Avenue Northwest",
      unit: "Lower Level",
      available: "Now",
      open: true,
      summary: "Lower Level at 1728-1730 Connecticut Avenue Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "Lower Level at 1728-1730 Connecticut Avenue Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "1728-1730-connecticut-avenue-northwest-unit-4a",
      name: "1728-1730 Connecticut Avenue Northwest, Unit 4A",
      intent: "rent",
      type: "Residential",
      state: "Washington, D.C.",
      street: "1728-1730 Connecticut Avenue Northwest",
      unit: "Unit 4A",
      available: "Now",
      open: true,
      summary: "Unit 4A at 1728-1730 Connecticut Avenue Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "Unit 4A at 1728-1730 Connecticut Avenue Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3112-mount-pleasant-street-northwest-artists-studios",
      name: "3112 Mount Pleasant Street Northwest, Artists Studios",
      intent: "rent",
      type: "Commercial",
      state: "Washington, D.C.",
      street: "3112 Mount Pleasant Street Northwest",
      unit: "Artists Studios",
      available: "Now",
      open: true,
      summary: "Artists Studios at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "Artists Studios at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3112-mount-pleasant-street-northwest-basement",
      name: "3112 Mount Pleasant Street Northwest, Basement",
      intent: "rent",
      type: "Residential",
      state: "Washington, D.C.",
      street: "3112 Mount Pleasant Street Northwest",
      unit: "Basement",
      available: "Now",
      open: true,
      summary: "The basement at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "The basement at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3112-mount-pleasant-street-northwest-storefront",
      name: "3112 Mount Pleasant Street Northwest, Storefront",
      intent: "rent",
      type: "Retail",
      state: "Washington, D.C.",
      street: "3112 Mount Pleasant Street Northwest",
      unit: "Storefront",
      available: "Now",
      open: true,
      summary: "The storefront at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
      story: [
        "The storefront at 3112 Mount Pleasant Street Northwest in Washington, D.C. is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3323-bunker-hill-road",
      name: "3323 Bunker Hill Road",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      available: "Now",
      open: true,
      summary: "3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3323-bunker-hill-road-unit-1",
      name: "3323 Bunker Hill Road, Unit 1",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      unit: "Unit 1",
      available: "Now",
      open: true,
      summary: "Unit 1 at 3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 1 at 3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3323-bunker-hill-road-unit-2",
      name: "3323 Bunker Hill Road, Unit 2",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      unit: "Unit 2",
      available: "Now",
      open: true,
      summary: "Unit 2 at 3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 2 at 3323 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-3",
      name: "3401 Bunker Hill Road, Unit 3",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 3",
      available: "Now",
      open: true,
      summary: "Unit 3 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 3 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-8",
      name: "3401 Bunker Hill Road, Unit 8",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 8",
      available: "Now",
      open: true,
      summary: "Unit 8 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 8 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-101",
      name: "3401 Bunker Hill Road, Unit 101",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 101",
      available: "Now",
      open: true,
      summary: "Unit 101 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 101 at 3401 Bunker Hill Road in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3817-34th-street",
      name: "3817 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      available: "Now",
      open: true,
      summary: "3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3817-34th-street-apt-1",
      name: "3817 34th Street, Apt 1",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      unit: "Apt 1",
      available: "Now",
      open: true,
      summary: "Apt 1 at 3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Apt 1 at 3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3817-34th-street-storefront-a",
      name: "3817 34th Street, Storefront A",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      unit: "Storefront A",
      available: "Now",
      open: true,
      summary: "Storefront A at 3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Storefront A at 3817 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3830-34th-street",
      name: "3830 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3830 34th Street",
      available: "Now",
      open: true,
      summary: "3830 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "3830 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3837-34th-street-unit-2",
      name: "3837 34th Street, Unit 2",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3837 34th Street",
      unit: "Unit 2",
      available: "Now",
      open: true,
      summary: "Unit 2 at 3837 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 2 at 3837 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3837-34th-street-unit-3",
      name: "3837 34th Street, Unit 3",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3837 34th Street",
      unit: "Unit 3",
      available: "Now",
      open: true,
      summary: "Unit 3 at 3837 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "Unit 3 at 3837 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3840-34th-street",
      name: "3840 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3840 34th Street",
      available: "Now",
      open: true,
      summary: "3840 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "3840 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3850-34th-street-commercial",
      name: "3850 34th Street, Commercial",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3850 34th Street",
      available: "Now",
      open: true,
      summary: "The commercial space at 3850 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "The commercial space at 3850 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "3850-34th-street",
      name: "3850 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3850 34th Street",
      available: "Now",
      open: true,
      summary: "3850 34th Street in Mount Rainier, Maryland is vacant and available now.",
      story: [
        "3850 34th Street in Mount Rainier, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4312-hamilton-street",
      name: "4312 Hamilton Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4312 Hamilton Street",
      available: "Now",
      open: true,
      summary: "4312 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "4312 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4314-hamilton-street",
      name: "4314 Hamilton Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4314 Hamilton Street",
      available: "Now",
      open: true,
      summary: "4314 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "4314 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-8",
      name: "4318 Hamilton Street, Unit 8",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 8",
      available: "Now",
      open: true,
      summary: "Unit 8 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 8 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-10",
      name: "4318 Hamilton Street, Unit 10",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 10",
      available: "Now",
      open: true,
      summary: "Unit 10 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 10 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-14-16-17",
      name: "4318 Hamilton Street, Unit 14/16/17",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 14/16/17",
      available: "Now",
      open: true,
      summary: "Unit 14/16/17 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 14/16/17 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-103-105",
      name: "4318 Hamilton Street, Unit 103/105",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 103/105",
      available: "Now",
      open: true,
      summary: "Unit 103/105 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 103/105 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-106",
      name: "4318 Hamilton Street, Unit 106",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 106",
      available: "Now",
      open: true,
      summary: "Unit 106 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 106 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-107",
      name: "4318 Hamilton Street, Unit 107",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 107",
      available: "Now",
      open: true,
      summary: "Unit 107 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 107 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-108",
      name: "4318 Hamilton Street, Unit 108",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 108",
      available: "Now",
      open: true,
      summary: "Unit 108 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 108 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-110",
      name: "4318 Hamilton Street, Unit 110",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 110",
      available: "Now",
      open: true,
      summary: "Unit 110 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 110 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-200",
      name: "4318 Hamilton Street, Unit 200",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 200",
      available: "Now",
      open: true,
      summary: "Unit 200 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 200 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-203-205",
      name: "4318 Hamilton Street, Unit 203/205",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 203/205",
      available: "Now",
      open: true,
      summary: "Unit 203/205 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 203/205 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-206",
      name: "4318 Hamilton Street, Unit 206",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 206",
      available: "Now",
      open: true,
      summary: "Unit 206 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 206 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-207",
      name: "4318 Hamilton Street, Unit 207",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 207",
      available: "Now",
      open: true,
      summary: "Unit 207 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 207 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4318-hamilton-street-unit-210",
      name: "4318 Hamilton Street, Unit 210",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 210",
      available: "Now",
      open: true,
      summary: "Unit 210 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Unit 210 at 4318 Hamilton Street in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4804-decatur-street",
      name: "4804 Decatur Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Edmonston",
      street: "4804 Decatur Street",
      available: "Now",
      open: true,
      summary: "4804 Decatur Street in Edmonston, Maryland is vacant and available now.",
      story: [
        "4804 Decatur Street in Edmonston, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4826-annapolis-road-lot",
      name: "4826 Annapolis Road, Lot",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Bladensburg",
      street: "4826 Annapolis Road",
      unit: "Lot",
      available: "Now",
      open: true,
      summary: "The lot at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
      story: [
        "The lot at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4826-annapolis-road-unit-a",
      name: "4826 Annapolis Road, Unit A",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Bladensburg",
      street: "4826 Annapolis Road",
      unit: "Unit A",
      available: "Now",
      open: true,
      summary: "Unit A at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
      story: [
        "Unit A at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4826-annapolis-road-unit-b",
      name: "4826 Annapolis Road, Unit B",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Bladensburg",
      street: "4826 Annapolis Road",
      unit: "Unit B",
      available: "Now",
      open: true,
      summary: "Unit B at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
      story: [
        "Unit B at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4826-annapolis-road-unit-c",
      name: "4826 Annapolis Road, Unit C",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Bladensburg",
      street: "4826 Annapolis Road",
      unit: "Unit C",
      available: "Now",
      open: true,
      summary: "Unit C at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
      story: [
        "Unit C at 4826 Annapolis Road in Bladensburg, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "4911-edmonston-road-departamento-1",
      name: "4911 Edmonston Road, Departamento 1",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4911 Edmonston Road",
      unit: "Departamento 1",
      available: "Now",
      open: true,
      summary: "Departamento 1 at 4911 Edmonston Road in Hyattsville, Maryland is vacant and available now.",
      story: [
        "Departamento 1 at 4911 Edmonston Road in Hyattsville, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-barber-booth",
      name: "7930-7932 Georgia Avenue, Barber booth",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Barber booth",
      available: "Now",
      open: true,
      summary: "Barber booth at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Barber booth at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-1",
      name: "7930-7932 Georgia Avenue, Booth 1",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 1",
      available: "Now",
      open: true,
      summary: "Booth 1 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 1 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-2",
      name: "7930-7932 Georgia Avenue, Booth 2",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 2",
      available: "Now",
      open: true,
      summary: "Booth 2 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 2 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-3",
      name: "7930-7932 Georgia Avenue, Booth 3",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 3",
      available: "Now",
      open: true,
      summary: "Booth 3 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 3 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-4",
      name: "7930-7932 Georgia Avenue, Booth 4",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 4",
      available: "Now",
      open: true,
      summary: "Booth 4 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 4 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-5",
      name: "7930-7932 Georgia Avenue, Booth 5",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 5",
      available: "Now",
      open: true,
      summary: "Booth 5 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 5 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-6",
      name: "7930-7932 Georgia Avenue, Booth 6",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 6",
      available: "Now",
      open: true,
      summary: "Booth 6 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Booth 6 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-unit-105",
      name: "7930-7932 Georgia Avenue, Unit 105",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Unit 105",
      available: "Now",
      open: true,
      summary: "Unit 105 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
      story: [
        "Unit 105 at 7930-7932 Georgia Avenue in Silver Spring, Maryland is vacant and available now.",
        "Ask the office for the rent and a time to see it."
      ]
    }
  ]
};
