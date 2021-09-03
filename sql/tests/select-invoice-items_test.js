export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { InvoiceId: 10, InvoiceItem: 'Amor De Muito', UnitPrice: 0.99 },
  { InvoiceId: 10, InvoiceItem: 'Etnia', UnitPrice: 0.99 },
  {
    InvoiceId: 10,
    InvoiceItem: 'Maracatu Atômico [Trip Hop]',
    UnitPrice: 0.99
  },
  { InvoiceId: 10, InvoiceItem: 'Samba Do Lado', UnitPrice: 0.99 },
  { InvoiceId: 10, InvoiceItem: 'Sangue De Bairro', UnitPrice: 0.99 },
  { InvoiceId: 10, InvoiceItem: 'Sobremesa', UnitPrice: 0.99 }
]

Object.freeze(tests)