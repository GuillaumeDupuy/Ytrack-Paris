export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Name: 'Alternative', NumberOfTracks: 40 },
  { Name: 'Alternative & Punk', NumberOfTracks: 332 },
  { Name: 'Blues', NumberOfTracks: 81 },
  { Name: 'Bossa Nova', NumberOfTracks: 15 },
  { Name: 'Classical', NumberOfTracks: 74 },
  { Name: 'Comedy', NumberOfTracks: 17 },
  { Name: 'Drama', NumberOfTracks: 64 },
  { Name: 'Easy Listening', NumberOfTracks: 24 },
  { Name: 'Electronica/Dance', NumberOfTracks: 30 },
  { Name: 'Heavy Metal', NumberOfTracks: 28 },
  { Name: 'Hip Hop/Rap', NumberOfTracks: 35 },
  { Name: 'Jazz', NumberOfTracks: 130 },
  { Name: 'Latin', NumberOfTracks: 579 },
  { Name: 'Metal', NumberOfTracks: 374 },
  { Name: 'Opera', NumberOfTracks: 1 },
  { Name: 'Pop', NumberOfTracks: 48 },
  { Name: 'R&B/Soul', NumberOfTracks: 61 },
  { Name: 'Reggae', NumberOfTracks: 58 },
  { Name: 'Rock', NumberOfTracks: 1297 },
  { Name: 'Rock And Roll', NumberOfTracks: 12 },
  { Name: 'Sci Fi & Fantasy', NumberOfTracks: 26 },
  { Name: 'Science Fiction', NumberOfTracks: 13 },
  { Name: 'Soundtrack', NumberOfTracks: 43 },
  { Name: 'TV Shows', NumberOfTracks: 93 },
  { Name: 'World', NumberOfTracks: 28 }
]

Object.freeze(tests)