export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    InvoiceId: 12,
    CustomerId: 2,
    InvoiceDate: '2009-02-11 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 13.86
  },
  {
    InvoiceId: 19,
    CustomerId: 40,
    InvoiceDate: '2009-03-14 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 13.86
  },
  {
    InvoiceId: 215,
    CustomerId: 42,
    InvoiceDate: '2011-07-30 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 13.86
  },
  {
    InvoiceId: 334,
    CustomerId: 39,
    InvoiceDate: '2013-01-07 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 13.86
  },
  {
    InvoiceId: 67,
    CustomerId: 2,
    InvoiceDate: '2009-10-12 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 8.91
  },
  {
    InvoiceId: 74,
    CustomerId: 40,
    InvoiceDate: '2009-11-12 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 8.91
  },
  {
    InvoiceId: 270,
    CustomerId: 42,
    InvoiceDate: '2012-03-29 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 8.91
  },
  {
    InvoiceId: 389,
    CustomerId: 39,
    InvoiceDate: '2013-09-07 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 8.91
  },
  {
    InvoiceId: 31,
    CustomerId: 42,
    InvoiceDate: '2009-05-07 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 5.94
  },
  {
    InvoiceId: 150,
    CustomerId: 39,
    InvoiceDate: '2010-10-16 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 5.94
  },
  {
    InvoiceId: 241,
    CustomerId: 2,
    InvoiceDate: '2011-11-23 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 5.94
  },
  {
    InvoiceId: 248,
    CustomerId: 40,
    InvoiceDate: '2011-12-24 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 5.94
  },
  {
    InvoiceId: 204,
    CustomerId: 42,
    InvoiceDate: '2011-06-19 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 3.98
  },
  {
    InvoiceId: 9,
    CustomerId: 42,
    InvoiceDate: '2009-02-02 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 3.96
  },
  {
    InvoiceId: 128,
    CustomerId: 39,
    InvoiceDate: '2010-07-14 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 3.96
  },
  {
    InvoiceId: 219,
    CustomerId: 2,
    InvoiceDate: '2011-08-21 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 3.96
  },
  {
    InvoiceId: 226,
    CustomerId: 40,
    InvoiceDate: '2011-09-21 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 3.96
  },
  {
    InvoiceId: 203,
    CustomerId: 40,
    InvoiceDate: '2011-06-19 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 2.98
  },
  {
    InvoiceId: 202,
    CustomerId: 39,
    InvoiceDate: '2011-06-06 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 1.99
  },
  {
    InvoiceId: 1,
    CustomerId: 2,
    InvoiceDate: '2009-01-01 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 1.98
  },
  {
    InvoiceId: 8,
    CustomerId: 40,
    InvoiceDate: '2009-02-01 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 1.98
  },
  {
    InvoiceId: 105,
    CustomerId: 39,
    InvoiceDate: '2010-04-11 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 1.98
  },
  {
    InvoiceId: 196,
    CustomerId: 2,
    InvoiceDate: '2011-05-19 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 1.98
  },
  {
    InvoiceId: 323,
    CustomerId: 39,
    InvoiceDate: '2012-11-27 00:00:00',
    BillingAddress: '4, Rue Milton',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75009',
    Total: 1.98
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
    InvoiceId: 83,
    CustomerId: 42,
    InvoiceDate: '2009-12-26 00:00:00',
    BillingAddress: '9, Place Louis Barthou',
    BillingCity: 'Bordeaux',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '33000',
    Total: 0.99
  },
  {
    InvoiceId: 293,
    CustomerId: 2,
    InvoiceDate: '2012-07-13 00:00:00',
    BillingAddress: 'Theodor-Heuss-Straße 34',
    BillingCity: 'Stuttgart',
    BillingState: null,
    BillingCountry: 'Germany',
    BillingPostalCode: '70174',
    Total: 0.99
  },
  {
    InvoiceId: 300,
    CustomerId: 40,
    InvoiceDate: '2012-08-13 00:00:00',
    BillingAddress: '8, Rue Hanovre',
    BillingCity: 'Paris',
    BillingState: null,
    BillingCountry: 'France',
    BillingPostalCode: '75002',
    Total: 0.99
  }
]

Object.freeze(tests)