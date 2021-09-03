export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    EmployeeId: 3,
    LastName: 'Peacock',
    FirstName: 'Jane',
    HireFrenchDate: '01/04/2002'
  },
  {
    EmployeeId: 2,
    LastName: 'Edwards',
    FirstName: 'Nancy',
    HireFrenchDate: '01/05/2002'
  },
  {
    EmployeeId: 1,
    LastName: 'Adams',
    FirstName: 'Andrew',
    HireFrenchDate: '14/08/2002'
  },
  {
    EmployeeId: 4,
    LastName: 'Park',
    FirstName: 'Margaret',
    HireFrenchDate: '03/05/2003'
  },
  {
    EmployeeId: 5,
    LastName: 'Johnson',
    FirstName: 'Steve',
    HireFrenchDate: '17/10/2003'
  },
  {
    EmployeeId: 6,
    LastName: 'Mitchell',
    FirstName: 'Michael',
    HireFrenchDate: '17/10/2003'
  },
  {
    EmployeeId: 7,
    LastName: 'King',
    FirstName: 'Robert',
    HireFrenchDate: '02/01/2004'
  },
  {
    EmployeeId: 8,
    LastName: 'Callahan',
    FirstName: 'Laura',
    HireFrenchDate: '04/03/2004'
  }
]

Object.freeze(tests)