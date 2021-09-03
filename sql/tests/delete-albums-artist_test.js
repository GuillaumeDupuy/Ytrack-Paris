export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(db.prepare(`SELECT AlbumId FROM albums WHERE ArtistId BETWEEN 1 AND 22`).all(), []))

Object.freeze(tests)