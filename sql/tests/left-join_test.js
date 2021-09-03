export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    Name: 'AC/DC',
    AlbumTitle: 'For Those About To Rock We Salute You'
  },
  { Name: 'AC/DC', AlbumTitle: 'Let There Be Rock' },
  { Name: 'Accept', AlbumTitle: 'Balls to the Wall' },
  { Name: 'Accept', AlbumTitle: 'Restless and Wild' },
  { Name: 'Aerosmith', AlbumTitle: 'Big Ones' },
  { Name: 'Alanis Morissette', AlbumTitle: 'Jagged Little Pill' },
  { Name: 'Alice In Chains', AlbumTitle: 'Facelift' },
  { Name: 'Antônio Carlos Jobim', AlbumTitle: 'Warner 25 Anos' },
  {
    Name: 'Antônio Carlos Jobim',
    AlbumTitle: 'Chill: Brazil (Disc 2)'
  },
  {
    Name: 'Apocalyptica',
    AlbumTitle: 'Plays Metallica By Four Cellos'
  },
  { Name: 'Audioslave', AlbumTitle: 'Audioslave' },
  { Name: 'Audioslave', AlbumTitle: 'Out Of Exile' },
  { Name: 'Audioslave', AlbumTitle: 'Revelations' },
  { Name: 'BackBeat', AlbumTitle: 'BackBeat Soundtrack' },
  { Name: 'Billy Cobham', AlbumTitle: 'The Best Of Billy Cobham' },
  {
    Name: 'Black Label Society',
    AlbumTitle: 'Alcohol Fueled Brewtality Live! [Disc 1]'
  },
  {
    Name: 'Black Label Society',
    AlbumTitle: 'Alcohol Fueled Brewtality Live! [Disc 2]'
  },
  { Name: 'Black Sabbath', AlbumTitle: 'Black Sabbath' },
  {
    Name: 'Black Sabbath',
    AlbumTitle: 'Black Sabbath Vol. 4 (Remaster)'
  },
  { Name: 'Body Count', AlbumTitle: 'Body Count' },
  { Name: 'Bruce Dickinson', AlbumTitle: 'Chemical Wedding' },
  {
    Name: 'Buddy Guy',
    AlbumTitle: 'The Best Of Buddy Guy - The Millenium Collection'
  },
  { Name: 'Caetano Veloso', AlbumTitle: 'Prenda Minha' },
  { Name: 'Caetano Veloso', AlbumTitle: 'Sozinho Remix Ao Vivo' },
  { Name: 'Chico Buarque', AlbumTitle: 'Minha Historia' },
  { Name: 'Chico Science & Nação Zumbi', AlbumTitle: 'Afrociberdelia' },
  {
    Name: 'Chico Science & Nação Zumbi',
    AlbumTitle: 'Da Lama Ao Caos'
  },
  { Name: 'Cidade Negra', AlbumTitle: 'Acústico MTV [Live]' },
  { Name: 'Cidade Negra', AlbumTitle: 'Cidade Negra - Hits' },
  { Name: 'Cláudio Zoli', AlbumTitle: 'Na Pista' },
  { Name: 'Various Artists', AlbumTitle: 'Axé Bahia 2001' },
  { Name: 'Various Artists', AlbumTitle: 'Carnaval 2001' },
  { Name: 'Various Artists', AlbumTitle: 'Sambas De Enredo 2001' },
  { Name: 'Various Artists', AlbumTitle: 'Vozes do MPB' },
  { Name: 'Led Zeppelin', AlbumTitle: 'BBC Sessions [Disc 1] [Live]' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Physical Graffiti [Disc 1]' },
  { Name: 'Led Zeppelin', AlbumTitle: 'BBC Sessions [Disc 2] [Live]' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Coda' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Houses Of The Holy' },
  { Name: 'Led Zeppelin', AlbumTitle: 'In Through The Out Door' },
  { Name: 'Led Zeppelin', AlbumTitle: 'IV' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Led Zeppelin I' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Led Zeppelin II' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Led Zeppelin III' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Physical Graffiti [Disc 2]' },
  { Name: 'Led Zeppelin', AlbumTitle: 'Presence' },
  {
    Name: 'Led Zeppelin',
    AlbumTitle: 'The Song Remains The Same (Disc 1)'
  },
  {
    Name: 'Led Zeppelin',
    AlbumTitle: 'The Song Remains The Same (Disc 2)'
  },
  { Name: 'Frank Zappa & Captain Beefheart', AlbumTitle: 'Bongo Fury' },
  { Name: 'Marcos Valle', AlbumTitle: 'Chill: Brazil (Disc 1)' },
  { Name: 'Milton Nascimento & Bebeto', AlbumTitle: null },
  { Name: 'Azymuth', AlbumTitle: null },
  { Name: 'Gilberto Gil', AlbumTitle: 'As Canções de Eu Tu Eles' },
  { Name: 'Gilberto Gil', AlbumTitle: 'Quanta Gente Veio Ver (Live)' },
  {
    Name: 'Gilberto Gil',
    AlbumTitle: 'Quanta Gente Veio ver--Bônus De Carnaval'
  },
  { Name: 'João Gilberto', AlbumTitle: null },
  { Name: 'Bebel Gilberto', AlbumTitle: null },
  { Name: 'Jorge Vercilo', AlbumTitle: null },
  { Name: 'Baby Consuelo', AlbumTitle: null },
  { Name: 'Ney Matogrosso', AlbumTitle: null },
  { Name: 'Luiz Melodia', AlbumTitle: null },
  { Name: 'Nando Reis', AlbumTitle: null },
  { Name: 'Pedro Luís & A Parede', AlbumTitle: null },
  {
    Name: 'O Rappa',
    AlbumTitle: 'Radio Brasil (O Som da Jovem Vanguarda) - Seleccao de Henrique Amaro'
  },
  { Name: 'Ed Motta', AlbumTitle: 'The Best of Ed Motta' },
  { Name: 'Banda Black Rio', AlbumTitle: null },
  { Name: 'Fernanda Porto', AlbumTitle: null },
  { Name: 'Os Cariocas', AlbumTitle: null },
  { Name: 'Elis Regina', AlbumTitle: 'Elis Regina-Minha História' },
  {
    Name: 'Milton Nascimento',
    AlbumTitle: 'Milton Nascimento Ao Vivo'
  },
  { Name: 'Milton Nascimento', AlbumTitle: 'Minas' },
  { Name: 'A Cor Do Som', AlbumTitle: null },
  { Name: 'Kid Abelha', AlbumTitle: null },
  { Name: 'Sandra De Sá', AlbumTitle: null },
  { Name: 'Jorge Ben', AlbumTitle: 'Jorge Ben Jor 25 Anos' },
  { Name: 'Hermeto Pascoal', AlbumTitle: null },
  { Name: 'Barão Vermelho', AlbumTitle: null },
  {
    Name: 'Edson, DJ Marky & DJ Patife Featuring Fernanda Porto',
    AlbumTitle: null
  },
  { Name: 'Metallica', AlbumTitle: 'Garage Inc. (Disc 1)' },
  { Name: 'Metallica', AlbumTitle: 'Black Album' },
  { Name: 'Metallica', AlbumTitle: 'Garage Inc. (Disc 2)' },
  { Name: 'Metallica', AlbumTitle: "Kill 'Em All" },
  { Name: 'Metallica', AlbumTitle: 'Load' },
  { Name: 'Metallica', AlbumTitle: 'Master Of Puppets' },
  { Name: 'Metallica', AlbumTitle: 'ReLoad' },
  { Name: 'Metallica', AlbumTitle: 'Ride The Lightning' },
  { Name: 'Metallica', AlbumTitle: 'St. Anger' },
  { Name: 'Metallica', AlbumTitle: '...And Justice For All' },
  { Name: 'Queen', AlbumTitle: 'Greatest Hits II' },
  { Name: 'Queen', AlbumTitle: 'Greatest Hits I' },
  { Name: 'Queen', AlbumTitle: 'News Of The World' },
  { Name: 'Kiss', AlbumTitle: 'Greatest Kiss' },
  { Name: 'Kiss', AlbumTitle: 'Unplugged [Live]' },
  { Name: 'Spyro Gyra', AlbumTitle: 'Heart of the Night' },
  { Name: 'Spyro Gyra', AlbumTitle: 'Morning Dance' },
  { Name: 'Green Day', AlbumTitle: 'International Superhits' },
  { Name: 'Green Day', AlbumTitle: 'American Idiot' },
  { Name: 'David Coverdale', AlbumTitle: 'Into The Light' },
  { Name: 'Gonzaguinha', AlbumTitle: 'Meus Momentos' },
  { Name: 'Os Mutantes', AlbumTitle: 'Minha História' }
]

Object.freeze(tests)