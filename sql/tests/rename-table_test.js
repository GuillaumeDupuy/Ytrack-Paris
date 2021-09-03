export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db, sortObjectsInArray }) => eq(
  sortObjectsInArray(db.prepare(`PRAGMA table_info(songs)`).all()),
  sortObjectsInArray(expected)
))

const expected = [
  {
    cid: 0,
    name: 'TrackId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 1
  },
  {
    cid: 1,
    name: 'Name',
    type: 'NVARCHAR(200)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 2,
    name: 'AlbumId',
    type: 'INTEGER',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 3,
    name: 'MediaTypeId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 4,
    name: 'GenreId',
    type: 'INTEGER',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 5,
    name: 'Composer',
    type: 'NVARCHAR(220)',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 6,
    name: 'Milliseconds',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 7,
    name: 'Bytes',
    type: 'INTEGER',
    notnull: 0,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 8,
    name: 'UnitPrice',
    type: 'NUMERIC(10,2)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  }
]

Object.freeze(tests)