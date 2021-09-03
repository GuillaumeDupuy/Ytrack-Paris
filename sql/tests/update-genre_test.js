export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(
  db.prepare(`SELECT * FROM genres WHERE Name = 'Rap'`).get(),
  { GenreId: 17, Name: 'Rap' }
))

Object.freeze(tests)