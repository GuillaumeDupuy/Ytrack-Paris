export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db, sortObjectsInArray }) => eq(
  sortObjectsInArray(db.prepare(`PRAGMA table_info(students)`).all()),
  sortObjectsInArray(expected)
))

const expected = [
  {
    cid: 0,
    name: 'StudentId',
    type: 'INTEGER',
    notnull: 1,
    dflt_value: null,
    pk: 1
  },
  {
    cid: 1,
    name: 'FirstName',
    type: 'VARCHAR(80)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 2,
    name: 'LastName',
    type: 'VARCHAR(80)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 3,
    name: 'Birthday',
    type: 'DATE',
    notnull: 1,
    dflt_value: null,
    pk: 0
  },
  {
    cid: 4,
    name: 'City',
    type: 'VARCHAR(50)',
    notnull: 1,
    dflt_value: null,
    pk: 0
  }
]

Object.freeze(tests)