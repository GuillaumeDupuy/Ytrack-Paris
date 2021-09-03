export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [ { AllInvoicesTotalPrice: 38.620000000000005 } ]

Object.freeze(tests)