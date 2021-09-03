export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(db.prepare(`SELECT * FROM genres WHERE Name = 'Reggae'`).get(), undefined))

Object.freeze(tests)