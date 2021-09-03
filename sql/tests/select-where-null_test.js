export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    InvoiceId: 33,
    CustomerId: 57,
    InvoiceDate: '2009-05-15 00:00:00',
    BillingAddress: 'Calle Lira, 198',
    BillingCity: 'Santiago',
    BillingState: null,
    BillingCountry: 'Chile',
    BillingPostalCode: null,
    Total: 13.86
  },
  {
    InvoiceId: 88,
    CustomerId: 57,
    InvoiceDate: '2010-01-13 00:00:00',
    BillingAddress: 'Calle Lira, 198',
    BillingCity: 'Santiago',
    BillingState: null,
    BillingCountry: 'Chile',
    BillingPostalCode: null,
    Total: 17.91
  },
  {
    InvoiceId: 257,
    CustomerId: 34,
    InvoiceDate: '2012-02-01 00:00:00',
    BillingAddress: 'Rua da Assunção 53',
    BillingCity: 'Lisbon',
    BillingState: null,
    BillingCountry: 'Portugal',
    BillingPostalCode: null,
    Total: 13.86
  },
  {
    InvoiceId: 312,
    CustomerId: 34,
    InvoiceDate: '2012-10-01 00:00:00',
    BillingAddress: 'Rua da Assunção 53',
    BillingCity: 'Lisbon',
    BillingState: null,
    BillingCountry: 'Portugal',
    BillingPostalCode: null,
    Total: 10.91
  },
  {
    InvoiceId: 355,
    CustomerId: 35,
    InvoiceDate: '2013-04-10 00:00:00',
    BillingAddress: 'Rua dos Campeões Europeus de Viena, 4350',
    BillingCity: 'Porto',
    BillingState: null,
    BillingCountry: 'Portugal',
    BillingPostalCode: null,
    Total: 13.86
  }
]

Object.freeze(tests)