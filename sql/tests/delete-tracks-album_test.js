export const tests = []
const t = (f) => tests.push(f)

t(({ eq, query }) => eq((query.toUpperCase().match(/SELECT/g) || []).length > 0, true))
t(({ eq, db }) => eq(db.prepare(
  `SELECT
	  *
  FROM
    tracks
  WHERE
    AlbumId = 7`
).all(), []))

Object.freeze(tests)