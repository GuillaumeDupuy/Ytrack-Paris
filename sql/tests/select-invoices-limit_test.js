export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    InvoiceId: 412,
    CustomerId: 58,
    InvoiceDate: '2013-12-22 00:00:00',
    BillingAddress: '12,Community Centre',
    BillingCity: 'Delhi',
    BillingState: null,
    BillingCountry: 'India',
    BillingPostalCode: '110017',
    Total: 1.99
  },
  {
    InvoiceId: 411,
    CustomerId: 44,
    InvoiceDate: '2013-12-14 00:00:00',
    BillingAddress: 'Porthaninkatu 9',
    BillingCity: 'Helsinki',
    BillingState: null,
    BillingCountry: 'Finland',
    BillingPostalCode: '00530',
    Total: 13.86
  },
  {
    InvoiceId: 410,
    CustomerId: 35,
    InvoiceDate: '2013-12-09 00:00:00',
    BillingAddress: 'Rua dos Campeões Europeus de Viena, 4350',
    BillingCity: 'Porto',
    BillingState: null,
    BillingCountry: 'Portugal',
    BillingPostalCode: null,
    Total: 8.91
  },
  {
    InvoiceId: 409,
    CustomerId: 29,
    InvoiceDate: '2013-12-06 00:00:00',
    BillingAddress: '796 Dundas Street West',
    BillingCity: 'Toronto',
    BillingState: 'ON',
    BillingCountry: 'Canada',
    BillingPostalCode: 'M6J 1V1',
    Total: 5.94
  },
  {
    InvoiceId: 408,
    CustomerId: 25,
    InvoiceDate: '2013-12-05 00:00:00',
    BillingAddress: '319 N. Frances Street',
    BillingCity: 'Madison',
    BillingState: 'WI',
    BillingCountry: 'USA',
    BillingPostalCode: '53703',
    Total: 3.96
  },
  {
    InvoiceId: 406,
    CustomerId: 21,
    InvoiceDate: '2013-12-04 00:00:00',
    BillingAddress: '801 W 4th Street',
    BillingCity: 'Reno',
    BillingState: 'NV',
    BillingCountry: 'USA',
    BillingPostalCode: '89503',
    Total: 1.98
  },
  {
    InvoiceId: 407,
    CustomerId: 23,
    InvoiceDate: '2013-12-04 00:00:00',
    BillingAddress: '69 Salem Street',
    BillingCity: 'Boston',
    BillingState: 'MA',
    BillingCountry: 'USA',
    BillingPostalCode: '2113',
    Total: 1.98
  },
  {
    InvoiceId: 405,
    CustomerId: 20,
    InvoiceDate: '2013-11-21 00:00:00',
    BillingAddress: '541 Del Medio Avenue',
    BillingCity: 'Mountain View',
    BillingState: 'CA',
    BillingCountry: 'USA',
    BillingPostalCode: '94040-111',
    Total: 0.99
  },
  {
    InvoiceId: 404,
    CustomerId: 6,
    InvoiceDate: '2013-11-13 00:00:00',
    BillingAddress: 'Rilská 3174/6',
    BillingCity: 'Prague',
    BillingState: null,
    BillingCountry: 'Czech Republic',
    BillingPostalCode: '14300',
    Total: 25.86
  },
  {
    InvoiceId: 403,
    CustomerId: 56,
    InvoiceDate: '2013-11-08 00:00:00',
    BillingAddress: '307 Macacha Güemes',
    BillingCity: 'Buenos Aires',
    BillingState: null,
    BillingCountry: 'Argentina',
    BillingPostalCode: '1106',
    Total: 8.91
  },
  {
    InvoiceId: 402,
    CustomerId: 50,
    InvoiceDate: '2013-11-05 00:00:00',
    BillingAddress: 'C/ San Bernardo 85',
    BillingCity: 'Madrid',
    BillingState: null,
    BillingCountry: 'Spain',
    BillingPostalCode: '28015',
    Total: 5.94
  },
  {
    InvoiceId: 401,
    CustomerId: 46,
    InvoiceDate: '2013-11-04 00:00:00',
    BillingAddress: '3 Chatham Street',
    BillingCity: 'Dublin',
    BillingState: 'Dublin',
    BillingCountry: 'Ireland',
    BillingPostalCode: null,
    Total: 3.96
  },
  {
    InvoiceId: 399,
    CustomerId: 42,
    InvoiceDate: '2013-11-03 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 1.98
  },
  {
    InvoiceId: 400,
    CustomerId: 44,
    InvoiceDate: '2013-11-03 00:00:00',
    BillingAddress: 'Porthaninkatu 9',
    BillingCity: 'Helsinki',
    BillingState: null,
    BillingCountry: 'Finland',
    BillingPostalCode: '00530',
    Total: 1.98
  },
  {
    InvoiceId: 398,
    CustomerId: 41,
    InvoiceDate: '2013-10-21 00:00:00',
    BillingAddress: '11, Place Bellecour',
    BillingCity: 'Lyon',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '69002',
    Total: 0.99
  }
]

Object.freeze(tests)