export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { FullName: 'Astrid GRUBER', AllInvoices: 42.62 },
  { FullName: 'Bjørn HANSEN', AllInvoices: 39.62 },
  { FullName: 'Camille BERNARD', AllInvoices: 38.620000000000005 },
  { FullName: 'Dan MILLER', AllInvoices: 39.62 },
  { FullName: 'Dominique LEFEBVRE', AllInvoices: 38.620000000000005 },
  { FullName: 'Frank RALSTON', AllInvoices: 43.62 },
  {
    FullName: 'František WICHTERLOVá',
    AllInvoices: 40.620000000000005
  },
  { FullName: 'François TREMBLAY', AllInvoices: 39.62 },
  { FullName: 'Fynn ZIMMERMANN', AllInvoices: 43.62 },
  { FullName: 'Heather LEACOCK', AllInvoices: 39.62 },
  { FullName: 'Helena HOLý', AllInvoices: 49.620000000000005 },
  { FullName: "Hugh O'REILLY", AllInvoices: 45.62 },
  { FullName: 'Isabelle MERCIER', AllInvoices: 40.620000000000005 },
  { FullName: 'Jack SMITH', AllInvoices: 39.620000000000005 },
  { FullName: 'Jennifer PETERSON', AllInvoices: 38.620000000000005 },
  { FullName: 'Joakim JOHANSSON', AllInvoices: 38.620000000000005 },
  { FullName: 'Johannes VAN DER BERG', AllInvoices: 40.62 },
  { FullName: 'João FERNANDES', AllInvoices: 39.620000000000005 },
  { FullName: 'Julia BARNETT', AllInvoices: 43.620000000000005 },
  { FullName: 'Ladislav KOVáCS', AllInvoices: 45.62 },
  { FullName: 'Luis ROJAS', AllInvoices: 46.62 },
  { FullName: 'Luís GONçALVES', AllInvoices: 39.62 },
  { FullName: 'Manoj PAREEK', AllInvoices: 38.620000000000005 },
  { FullName: 'Richard CUNNINGHAM', AllInvoices: 47.620000000000005 },
  { FullName: 'Terhi HäMäLäINEN', AllInvoices: 41.620000000000005 },
  { FullName: 'Tim GOYER', AllInvoices: 38.620000000000005 },
  { FullName: 'Victor STEVENS', AllInvoices: 42.62 },
  { FullName: 'Wyatt GIRARD', AllInvoices: 39.62 }
]

Object.freeze(tests)