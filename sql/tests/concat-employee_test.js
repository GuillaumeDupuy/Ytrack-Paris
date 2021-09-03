export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Employee: 'Andrew Adams lives in Edmonton' },
  { Employee: 'Nancy Edwards lives in Calgary' },
  { Employee: 'Jane Peacock lives in Calgary' },
  { Employee: 'Margaret Park lives in Calgary' },
  { Employee: 'Steve Johnson lives in Calgary' },
  { Employee: 'Michael Mitchell lives in Calgary' },
  { Employee: 'Robert King lives in Lethbridge' },
  { Employee: 'Laura Callahan lives in Lethbridge' }
]

Object.freeze(tests)