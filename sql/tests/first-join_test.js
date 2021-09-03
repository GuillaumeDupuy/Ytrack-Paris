export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    AlbumName: 'For Those About To Rock We Salute You',
    ArtistName: 'AC/DC'
  },
  { AlbumName: 'Balls to the Wall', ArtistName: 'Accept' },
  { AlbumName: 'Restless and Wild', ArtistName: 'Accept' },
  { AlbumName: 'Let There Be Rock', ArtistName: 'AC/DC' },
  { AlbumName: 'Big Ones', ArtistName: 'Aerosmith' },
  { AlbumName: 'Jagged Little Pill', ArtistName: 'Alanis Morissette' },
  { AlbumName: 'Facelift', ArtistName: 'Alice In Chains' },
  { AlbumName: 'Warner 25 Anos', ArtistName: 'Antônio Carlos Jobim' },
  {
    AlbumName: 'Plays Metallica By Four Cellos',
    ArtistName: 'Apocalyptica'
  },
  { AlbumName: 'Audioslave', ArtistName: 'Audioslave' },
  { AlbumName: 'Out Of Exile', ArtistName: 'Audioslave' },
  { AlbumName: 'BackBeat Soundtrack', ArtistName: 'BackBeat' },
  { AlbumName: 'The Best Of Billy Cobham', ArtistName: 'Billy Cobham' },
  {
    AlbumName: 'Alcohol Fueled Brewtality Live! [Disc 1]',
    ArtistName: 'Black Label Society'
  },
  {
    AlbumName: 'Alcohol Fueled Brewtality Live! [Disc 2]',
    ArtistName: 'Black Label Society'
  },
  { AlbumName: 'Black Sabbath', ArtistName: 'Black Sabbath' },
  {
    AlbumName: 'Black Sabbath Vol. 4 (Remaster)',
    ArtistName: 'Black Sabbath'
  },
  { AlbumName: 'Body Count', ArtistName: 'Body Count' },
  { AlbumName: 'Chemical Wedding', ArtistName: 'Bruce Dickinson' },
  {
    AlbumName: 'The Best Of Buddy Guy - The Millenium Collection',
    ArtistName: 'Buddy Guy'
  },
  { AlbumName: 'Prenda Minha', ArtistName: 'Caetano Veloso' },
  { AlbumName: 'Sozinho Remix Ao Vivo', ArtistName: 'Caetano Veloso' },
  { AlbumName: 'Minha Historia', ArtistName: 'Chico Buarque' },
  {
    AlbumName: 'Afrociberdelia',
    ArtistName: 'Chico Science & Nação Zumbi'
  },
  {
    AlbumName: 'Da Lama Ao Caos',
    ArtistName: 'Chico Science & Nação Zumbi'
  },
  { AlbumName: 'Acústico MTV [Live]', ArtistName: 'Cidade Negra' },
  { AlbumName: 'Cidade Negra - Hits', ArtistName: 'Cidade Negra' },
  { AlbumName: 'Na Pista', ArtistName: 'Cláudio Zoli' },
  { AlbumName: 'Axé Bahia 2001', ArtistName: 'Various Artists' },
  {
    AlbumName: 'BBC Sessions [Disc 1] [Live]',
    ArtistName: 'Led Zeppelin'
  },
  {
    AlbumName: 'Bongo Fury',
    ArtistName: 'Frank Zappa & Captain Beefheart'
  },
  { AlbumName: 'Carnaval 2001', ArtistName: 'Various Artists' },
  { AlbumName: 'Chill: Brazil (Disc 1)', ArtistName: 'Marcos Valle' },
  {
    AlbumName: 'Chill: Brazil (Disc 2)',
    ArtistName: 'Antônio Carlos Jobim'
  },
  { AlbumName: 'Garage Inc. (Disc 1)', ArtistName: 'Metallica' },
  { AlbumName: 'Greatest Hits II', ArtistName: 'Queen' },
  { AlbumName: 'Greatest Kiss', ArtistName: 'Kiss' },
  { AlbumName: 'Heart of the Night', ArtistName: 'Spyro Gyra' },
  { AlbumName: 'International Superhits', ArtistName: 'Green Day' },
  { AlbumName: 'Into The Light', ArtistName: 'David Coverdale' },
  { AlbumName: 'Meus Momentos', ArtistName: 'Gonzaguinha' },
  { AlbumName: 'Minha História', ArtistName: 'Os Mutantes' },
  {
    AlbumName: 'MK III The Final Concerts [Disc 1]',
    ArtistName: 'Deep Purple'
  },
  {
    AlbumName: 'Physical Graffiti [Disc 1]',
    ArtistName: 'Led Zeppelin'
  },
  { AlbumName: 'Sambas De Enredo 2001', ArtistName: 'Various Artists' },
  { AlbumName: 'Supernatural', ArtistName: 'Santana' },
  { AlbumName: 'The Best of Ed Motta', ArtistName: 'Ed Motta' },
  {
    AlbumName: 'The Essential Miles Davis [Disc 1]',
    ArtistName: 'Miles Davis'
  },
  {
    AlbumName: 'The Essential Miles Davis [Disc 2]',
    ArtistName: 'Miles Davis'
  },
  {
    AlbumName: 'The Final Concerts (Disc 2)',
    ArtistName: 'Deep Purple'
  },
  { AlbumName: "Up An' Atom", ArtistName: 'Gene Krupa' },
  {
    AlbumName: 'Vinícius De Moraes - Sem Limite',
    ArtistName: 'Toquinho & Vinícius'
  },
  { AlbumName: 'Vozes do MPB', ArtistName: 'Various Artists' },
  {
    AlbumName: 'Chronicle, Vol. 1',
    ArtistName: 'Creedence Clearwater Revival'
  },
  {
    AlbumName: 'Chronicle, Vol. 2',
    ArtistName: 'Creedence Clearwater Revival'
  },
  {
    AlbumName: 'Cássia Eller - Coleção Sem Limite [Disc 2]',
    ArtistName: 'Cássia Eller'
  },
  {
    AlbumName: 'Cássia Eller - Sem Limite [Disc 1]',
    ArtistName: 'Cássia Eller'
  },
  { AlbumName: 'Come Taste The Band', ArtistName: 'Deep Purple' },
  { AlbumName: 'Deep Purple In Rock', ArtistName: 'Deep Purple' },
  { AlbumName: 'Fireball', ArtistName: 'Deep Purple' },
  {
    AlbumName: "Knocking at Your Back Door: The Best Of Deep Purple in the 80's",
    ArtistName: 'Deep Purple'
  },
  { AlbumName: 'Machine Head', ArtistName: 'Deep Purple' },
  { AlbumName: 'Purpendicular', ArtistName: 'Deep Purple' },
  { AlbumName: 'Slaves And Masters', ArtistName: 'Deep Purple' },
  { AlbumName: 'Stormbringer', ArtistName: 'Deep Purple' },
  { AlbumName: 'The Battle Rages On', ArtistName: 'Deep Purple' },
  {
    AlbumName: "Vault: Def Leppard's Greatest Hits",
    ArtistName: 'Def Leppard'
  },
  { AlbumName: 'Outbreak', ArtistName: 'Dennis Chambers' },
  { AlbumName: 'Djavan Ao Vivo - Vol. 02', ArtistName: 'Djavan' },
  { AlbumName: 'Djavan Ao Vivo - Vol. 1', ArtistName: 'Djavan' },
  {
    AlbumName: 'Elis Regina-Minha História',
    ArtistName: 'Elis Regina'
  },
  { AlbumName: 'The Cream Of Clapton', ArtistName: 'Eric Clapton' },
  { AlbumName: 'Unplugged', ArtistName: 'Eric Clapton' },
  { AlbumName: 'Album Of The Year', ArtistName: 'Faith No More' },
  { AlbumName: 'Angel Dust', ArtistName: 'Faith No More' },
  {
    AlbumName: 'King For A Day Fool For A Lifetime',
    ArtistName: 'Faith No More'
  },
  { AlbumName: 'The Real Thing', ArtistName: 'Faith No More' },
  { AlbumName: 'Deixa Entrar', ArtistName: 'Falamansa' },
  { AlbumName: 'In Your Honor [Disc 1]', ArtistName: 'Foo Fighters' },
  { AlbumName: 'In Your Honor [Disc 2]', ArtistName: 'Foo Fighters' },
  { AlbumName: 'One By One', ArtistName: 'Foo Fighters' },
  { AlbumName: 'The Colour And The Shape', ArtistName: 'Foo Fighters' },
  {
    AlbumName: 'My Way: The Best Of Frank Sinatra [Disc 1]',
    ArtistName: 'Frank Sinatra'
  },
  { AlbumName: 'Roda De Funk', ArtistName: 'Funk Como Le Gusta' },
  { AlbumName: 'As Canções de Eu Tu Eles', ArtistName: 'Gilberto Gil' },
  {
    AlbumName: 'Quanta Gente Veio Ver (Live)',
    ArtistName: 'Gilberto Gil'
  },
  {
    AlbumName: 'Quanta Gente Veio ver--Bônus De Carnaval',
    ArtistName: 'Gilberto Gil'
  },
  { AlbumName: 'Faceless', ArtistName: 'Godsmack' },
  { AlbumName: 'American Idiot', ArtistName: 'Green Day' },
  {
    AlbumName: 'Appetite for Destruction',
    ArtistName: "Guns N' Roses"
  },
  { AlbumName: 'Use Your Illusion I', ArtistName: "Guns N' Roses" },
  { AlbumName: 'Use Your Illusion II', ArtistName: "Guns N' Roses" },
  { AlbumName: 'Blue Moods', ArtistName: 'Incognito' },
  {
    AlbumName: 'A Matter of Life and Death',
    ArtistName: 'Iron Maiden'
  },
  { AlbumName: 'A Real Dead One', ArtistName: 'Iron Maiden' },
  { AlbumName: 'A Real Live One', ArtistName: 'Iron Maiden' },
  { AlbumName: 'Brave New World', ArtistName: 'Iron Maiden' },
  { AlbumName: 'Dance Of Death', ArtistName: 'Iron Maiden' },
  { AlbumName: 'Fear Of The Dark', ArtistName: 'Iron Maiden' },
  { AlbumName: 'Iron Maiden', ArtistName: 'Iron Maiden' }
]

Object.freeze(tests)