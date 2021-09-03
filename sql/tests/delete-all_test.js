export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(db.prepare('SELECT * FROM artists').all(), []))

Object.freeze(tests)