export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { FirstName: 'Michelle', LastName: 'Brooks' },
  { FirstName: 'Tim', LastName: 'Goyer' },
  { FirstName: 'Frank', LastName: 'Ralston' }
]

Object.freeze(tests)