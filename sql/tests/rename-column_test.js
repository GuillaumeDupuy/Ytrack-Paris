export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db, sortObjectsInArray }) => eq(
  sortObjectsInArray(db.prepare(`PRAGMA table_info(invoices)`).all()),
  sortObjectsInArray(expected)
))

const expected = [
  {
    cid: 0,
    name: 'InvoiceId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 1
  },
  {
    cid: 1,
    name: 'CustomerId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 2,
    name: 'InvoiceDate',
    type: 'DATETIME',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 3,
    name: 'BillingAddress',
    type: 'NVARCHAR(70)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 4,
    name: 'BillingCity',
    type: 'NVARCHAR(40)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 5,
    name: 'BillingState',
    type: 'NVARCHAR(40)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 6,
    name: 'BillingCountry',
    type: 'NVARCHAR(40)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 7,
    name: 'BillingPostalCode',
    type: 'NVARCHAR(10)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 8,
    name: 'TotalAmount',
    type: 'NUMERIC(10,2)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  }
]

Object.freeze(tests)