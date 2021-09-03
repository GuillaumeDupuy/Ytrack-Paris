export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { FirstName: 'Jane', LastName: 'Peacock', ApproximateAge: 29 },
  { FirstName: 'Michael', LastName: 'Mitchell', ApproximateAge: 30 },
  { FirstName: 'Robert', LastName: 'King', ApproximateAge: 34 },
  { FirstName: 'Laura', LastName: 'Callahan', ApproximateAge: 36 },
  { FirstName: 'Steve', LastName: 'Johnson', ApproximateAge: 38 },
  { FirstName: 'Andrew', LastName: 'Adams', ApproximateAge: 40 },
  { FirstName: 'Nancy', LastName: 'Edwards', ApproximateAge: 44 },
  { FirstName: 'Margaret', LastName: 'Park', ApproximateAge: 56 }
]

Object.freeze(tests)