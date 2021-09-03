export const tests = []
const t = (f) => tests.push(f)

t(({ eq, query }) => eq(query.toLowerCase().includes('min'), true))
t(({ eq, query }) => eq(query.toLowerCase().includes('max'), true))
t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [ { MinTrack: 1071, MaxTrack: 5286953 } ]

Object.freeze(tests)