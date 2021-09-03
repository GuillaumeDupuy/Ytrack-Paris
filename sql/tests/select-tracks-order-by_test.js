export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Name: 'Dog Eat Dog', Milliseconds: 215196 },
  { Name: "Hell Ain't A Bad Place To Be", Milliseconds: 254380 },
  { Name: 'Bad Boy Boogie', Milliseconds: 267728 },
  { Name: 'Whole Lotta Rosie', Milliseconds: 323761 },
  { Name: 'Problem Child', Milliseconds: 325041 },
  { Name: 'Go Down', Milliseconds: 331180 },
  { Name: 'Let There Be Rock', Milliseconds: 366654 },
  { Name: 'Overdose', Milliseconds: 369319 }
]

Object.freeze(tests)