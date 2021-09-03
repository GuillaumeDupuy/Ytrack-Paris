export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [{ Name: 'Movies' }, { Name: 'Music' }, { Name: 'Music Videos' }]

Object.freeze(tests)