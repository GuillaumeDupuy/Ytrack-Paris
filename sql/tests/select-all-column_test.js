export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { FirstName: 'Andrew', LastName: 'Adams', Title: 'General Manager' },
  { FirstName: 'Nancy', LastName: 'Edwards', Title: 'Sales Manager' },
  {
    FirstName: 'Jane',
    LastName: 'Peacock',
    Title: 'Sales Support Agent'
  },
  {
    FirstName: 'Margaret',
    LastName: 'Park',
    Title: 'Sales Support Agent'
  },
  {
    FirstName: 'Steve',
    LastName: 'Johnson',
    Title: 'Sales Support Agent'
  },
  { FirstName: 'Michael', LastName: 'Mitchell', Title: 'IT Manager' },
  { FirstName: 'Robert', LastName: 'King', Title: 'IT Staff' },
  { FirstName: 'Laura', LastName: 'Callahan', Title: 'IT Staff' }
]

Object.freeze(tests)