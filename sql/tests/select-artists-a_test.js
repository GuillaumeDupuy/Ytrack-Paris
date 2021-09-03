export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { ArtistId: 1, Name: 'AC/DC' },
  { ArtistId: 2, Name: 'Accept' },
  { ArtistId: 3, Name: 'Aerosmith' },
  { ArtistId: 4, Name: 'Alanis Morissette' },
  { ArtistId: 5, Name: 'Alice In Chains' },
  { ArtistId: 6, Name: 'Antônio Carlos Jobim' },
  { ArtistId: 7, Name: 'Apocalyptica' },
  { ArtistId: 8, Name: 'Audioslave' },
  { ArtistId: 26, Name: 'Azymuth' },
  { ArtistId: 43, Name: 'A Cor Do Som' },
  { ArtistId: 159, Name: 'Aquaman' },
  {
    ArtistId: 161,
    Name: "Aerosmith & Sierra Leone's Refugee Allstars"
  },
  { ArtistId: 166, Name: 'Avril Lavigne' },
  { ArtistId: 197, Name: 'Aisha Duo' },
  { ArtistId: 202, Name: 'Aaron Goldberg' },
  { ArtistId: 206, Name: 'Alberto Turco & Nova Schola Gregoriana' },
  {
    ArtistId: 209,
    Name: 'Anne-Sophie Mutter, Herbert Von Karajan & Wiener Philharmoniker'
  },
  {
    ArtistId: 214,
    Name: 'Academy of St. Martin in the Fields & Sir Neville Marriner'
  },
  {
    ArtistId: 215,
    Name: 'Academy of St. Martin in the Fields Chamber Ensemble & Sir Neville Marriner'
  },
  {
    ArtistId: 222,
    Name: 'Academy of St. Martin in the Fields, John Birch, Sir Neville Marriner & Sylvia McNair'
  },
  { ArtistId: 230, Name: 'Aaron Copland & London Symphony Orchestra' },
  {
    ArtistId: 239,
    Name: 'Academy of St. Martin in the Fields, Sir Neville Marriner & William Bennett'
  },
  { ArtistId: 243, Name: 'Antal Doráti & London Symphony Orchestra' },
  { ArtistId: 252, Name: 'Amy Winehouse' },
  {
    ArtistId: 257,
    Name: 'Academy of St. Martin in the Fields, Sir Neville Marriner & Thurston Dart'
  },
  { ArtistId: 260, Name: 'Adrian Leaper & Doreen de Feis' }
]

Object.freeze(tests)