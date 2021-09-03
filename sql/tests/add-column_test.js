export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db, sortObjectsInArray }) => eq(
  sortObjectsInArray(db.prepare(`PRAGMA table_info(artists)`).all()),
  sortObjectsInArray(expected)
))

const expected = [
  {
    cid: 0,
    name: 'ArtistId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 1
  },
  {
    cid: 1,
    name: 'Name',
    type: 'NVARCHAR(120)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 2,
    name: 'year',
    type: 'INTEGER',
    notnull: 0,
    dflt_value: null,
    pk: 0
  }
]

Object.freeze(tests)