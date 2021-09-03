export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Name: 'AC/DC', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Accept', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Aerosmith', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Alanis Morissette',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'Alice In Chains',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'Antônio Carlos Jobim',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Apocalyptica', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Audioslave', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'BackBeat', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Billy Cobham', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Black Label Society',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Black Sabbath', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Body Count', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Bruce Dickinson',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Buddy Guy', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Caetano Veloso', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Chico Buarque', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Chico Science & Nação Zumbi',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Cidade Negra', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Cláudio Zoli', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Various Artists', NbAlbums: 4, IsProductive: 'Productive' },
  {
    Name: 'Led Zeppelin',
    NbAlbums: 14,
    IsProductive: 'Very Productive'
  },
  {
    Name: 'Frank Zappa & Captain Beefheart',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Marcos Valle', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Gilberto Gil', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'O Rappa', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Ed Motta', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Elis Regina', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Milton Nascimento',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Jorge Ben', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Metallica', NbAlbums: 10, IsProductive: 'Very Productive' },
  { Name: 'Queen', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'Kiss', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Spyro Gyra', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Green Day', NbAlbums: 2, IsProductive: 'Productive' },
  {
    Name: 'David Coverdale',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Gonzaguinha', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Os Mutantes', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Deep Purple',
    NbAlbums: 11,
    IsProductive: 'Very Productive'
  },
  { Name: 'Santana', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'Miles Davis', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'Gene Krupa', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Toquinho & Vinícius',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'Vinícius De Moraes',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'Creedence Clearwater Revival',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Cássia Eller', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Def Leppard', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Dennis Chambers',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Djavan', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Eric Clapton', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Faith No More', NbAlbums: 4, IsProductive: 'Productive' },
  { Name: 'Falamansa', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Foo Fighters', NbAlbums: 4, IsProductive: 'Productive' },
  { Name: 'Frank Sinatra', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Funk Como Le Gusta',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Godsmack', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: "Guns N' Roses", NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'Incognito', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Iron Maiden',
    NbAlbums: 21,
    IsProductive: 'Very Productive'
  },
  { Name: 'James Brown', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Jamiroquai', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'JET', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Jimi Hendrix', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Joe Satriani', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Jota Quest', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'João Suplicy', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Judas Priest', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Legião Urbana', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Lenny Kravitz', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Lulu Santos', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'Marillion', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Marisa Monte', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Marvin Gaye', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Men At Work', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Motörhead', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Mônica Marianno',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'Mötley Crüe', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Nirvana', NbAlbums: 2, IsProductive: 'Productive' },
  { Name: 'O Terço', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Olodum', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Os Paralamas Do Sucesso',
    NbAlbums: 3,
    IsProductive: 'Productive'
  },
  { Name: 'Ozzy Osbourne', NbAlbums: 6, IsProductive: 'Productive' },
  { Name: 'Page & Plant', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Passengers', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: "Paul D'Ianno", NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Pearl Jam', NbAlbums: 5, IsProductive: 'Productive' },
  { Name: 'Pink Floyd', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Planet Hemp', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'R.E.M. Feat. Kate Pearson',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  { Name: 'R.E.M.', NbAlbums: 3, IsProductive: 'Productive' },
  { Name: 'Raimundos', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Raul Seixas', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Red Hot Chili Peppers',
    NbAlbums: 3,
    IsProductive: 'Productive'
  },
  { Name: 'Rush', NbAlbums: 1, IsProductive: 'Unproductive' },
  { Name: 'Skank', NbAlbums: 2, IsProductive: 'Productive' },
  {
    Name: 'Smashing Pumpkins',
    NbAlbums: 2,
    IsProductive: 'Productive'
  },
  { Name: 'Soundgarden', NbAlbums: 1, IsProductive: 'Unproductive' },
  {
    Name: 'Stevie Ray Vaughan & Double Trouble',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'Stone Temple Pilots',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  },
  {
    Name: 'System Of A Down',
    NbAlbums: 1,
    IsProductive: 'Unproductive'
  }
]

Object.freeze(tests)