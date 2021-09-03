export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Name: 'Various Artists' },
  { Name: 'Van Halen' },
  { Name: 'U2' },
  { Name: 'Pearl Jam' },
  { Name: 'Ozzy Osbourne' },
  { Name: 'Metallica' },
  { Name: 'Lost' },
  { Name: 'Led Zeppelin' },
  { Name: 'Iron Maiden' },
  { Name: 'Foo Fighters' },
  { Name: 'Faith No More' },
  { Name: 'Deep Purple' }
]

Object.freeze(tests)