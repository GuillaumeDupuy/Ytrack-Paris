export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(
  db.prepare(`SELECT * FROM genres WHERE Name = 'Electro'`).get(),
  { GenreId: 26, Name: 'Electro' }
))

Object.freeze(tests)