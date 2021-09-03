export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { InvoiceId: 8, Total: 1.98 },
  { InvoiceId: 11, Total: 8.91 },
  { InvoiceId: 19, Total: 13.86 },
  { InvoiceId: 43, Total: 1.98 },
  { InvoiceId: 54, Total: 13.86 },
  { InvoiceId: 74, Total: 8.91 },
  { InvoiceId: 105, Total: 1.98 },
  { InvoiceId: 109, Total: 8.91 },
  { InvoiceId: 128, Total: 3.96 },
  { InvoiceId: 140, Total: 1.98 },
  { InvoiceId: 150, Total: 5.94 },
  { InvoiceId: 163, Total: 3.96 },
  { InvoiceId: 185, Total: 5.94 },
  { InvoiceId: 202, Total: 1.99 },
  { InvoiceId: 203, Total: 2.98 },
  { InvoiceId: 226, Total: 3.96 },
  { InvoiceId: 237, Total: 0.99 },
  { InvoiceId: 238, Total: 1.98 },
  { InvoiceId: 248, Total: 5.94 },
  { InvoiceId: 261, Total: 3.96 },
  { InvoiceId: 283, Total: 5.94 },
  { InvoiceId: 300, Total: 0.99 },
  { InvoiceId: 323, Total: 1.98 },
  { InvoiceId: 334, Total: 13.86 },
  { InvoiceId: 335, Total: 0.99 },
  { InvoiceId: 358, Total: 1.98 },
  { InvoiceId: 369, Total: 13.86 },
  { InvoiceId: 389, Total: 8.91 }
]

Object.freeze(tests)