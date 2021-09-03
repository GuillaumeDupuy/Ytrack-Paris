export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { FullName: 'Steve JOHNSON', NumberOfCustomers: 18 },
  { FullName: 'Margaret PARK', NumberOfCustomers: 20 },
  { FullName: 'Jane PEACOCK', NumberOfCustomers: 21 }
]

Object.freeze(tests)