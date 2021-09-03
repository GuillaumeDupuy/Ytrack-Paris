export const tests = []
const t = (f) => tests.push(f)

t(({ eq, query }) => eq((query.toUpperCase().match(/SELECT/g) || []).length > 1, true))
t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [ { AlbumId: 236, Title: 'Pop', ArtistId: 150 } ]

Object.freeze(tests)