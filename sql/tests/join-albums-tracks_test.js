export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    AlbumName: 'O Samba Poconé',
    TrackName: 'É Uma Partida De Futebol',
    Milliseconds: 1071
  },
  {
    AlbumName: 'Body Count',
    TrackName: 'Now Sports',
    Milliseconds: 4884
  },
  {
    AlbumName: 'Body Count',
    TrackName: 'A Statistic',
    Milliseconds: 6373
  },
  { AlbumName: 'Body Count', TrackName: 'Oprah', Milliseconds: 6635 },
  {
    AlbumName: 'House of Pain',
    TrackName: 'Commercial 1',
    Milliseconds: 7941
  },
  {
    AlbumName: 'Body Count',
    TrackName: 'The Real Problem',
    Milliseconds: 11650
  },
  {
    AlbumName: 'House of Pain',
    TrackName: 'Commercial 2',
    Milliseconds: 21211
  },
  {
    AlbumName: 'Os Cães Ladram Mas A Caravana Não Pára',
    TrackName: 'Bossa',
    Milliseconds: 29048
  },
  {
    AlbumName: 'As Canções de Eu Tu Eles',
    TrackName: 'Casinha Feliz',
    Milliseconds: 32287
  },
  {
    AlbumName: 'Afrociberdelia',
    TrackName: 'Mateus Enter',
    Milliseconds: 33149
  },
  {
    AlbumName: 'Deixa Entrar',
    TrackName: 'Deixa Entrar',
    Milliseconds: 33619
  },
  {
    AlbumName: 'Acústico',
    TrackName: 'Homem Primata (Vinheta)',
    Milliseconds: 34168
  },
  {
    AlbumName: 'Acústico',
    TrackName: 'Cabeça Dinossauro',
    Milliseconds: 37120
  },
  {
    AlbumName: 'Rattle And Hum',
    TrackName: 'Freedom For My People',
    Milliseconds: 38164
  },
  {
    AlbumName: 'Demorou...',
    TrackName: 'Demorou!',
    Milliseconds: 39131
  },
  {
    AlbumName: 'Living After Midnight',
    TrackName: 'The Hellion',
    Milliseconds: 41900
  },
  {
    AlbumName: 'Diver Down',
    TrackName: 'Little Guitars (Intro)',
    Milliseconds: 42240
  },
  {
    AlbumName: 'Rattle And Hum',
    TrackName: 'The Star Spangled Banner',
    Milliseconds: 43232
  },
  {
    AlbumName: 'Barulhinho Bom',
    TrackName: 'Blanco',
    Milliseconds: 45191
  },
  {
    AlbumName: 'Body Count',
    TrackName: 'Smoked Pork',
    Milliseconds: 47333
  },
  {
    AlbumName: 'Live After Death',
    TrackName: 'Intro- Churchill S Speech',
    Milliseconds: 48013
  },
  { AlbumName: 'No Security', TrackName: 'Intro', Milliseconds: 49737 },
  {
    AlbumName: "Liszt - 12 Études D'Execution Transcendante",
    TrackName: 'Étude 1, In C Major - Preludio (Presto) - Liszt',
    Milliseconds: 51780
  },
  {
    AlbumName: 'From The Muddy Banks Of The Wishkah [Live]',
    TrackName: 'Intro',
    Milliseconds: 52218
  },
  {
    AlbumName: 'Pearl Jam',
    TrackName: 'Wasted Reprise',
    Milliseconds: 53733
  },
  {
    AlbumName: 'Vinicius De Moraes',
    TrackName: 'Cotidiano N 2',
    Milliseconds: 55902
  },
  {
    AlbumName: 'Acústico',
    TrackName: 'Polícia (Vinheta)',
    Milliseconds: 56111
  },
  {
    AlbumName: 'Mezmerize',
    TrackName: 'Soldier Side - Intro',
    Milliseconds: 63764
  },
  {
    AlbumName: 'Diver Down',
    TrackName: 'Happy Trails',
    Milliseconds: 65488
  },
  { AlbumName: 'Riot Act', TrackName: 'Arc', Milliseconds: 65593 },
  {
    AlbumName: "Monteverdi: L'Orfeo",
    TrackName: "L'orfeo, Act 3, Sinfonia (Orchestra)",
    Milliseconds: 66639
  },
  {
    AlbumName: 'House of Pain',
    TrackName: 'Salutations',
    Milliseconds: 69120
  },
  {
    AlbumName: 'English Renaissance',
    TrackName: 'Lamentations of Jeremiah, First Set \\ Incipit Lamentatio',
    Milliseconds: 69194
  },
  {
    AlbumName: 'Afrociberdelia',
    TrackName: 'Interlude Zumbi',
    Milliseconds: 71627
  },
  {
    AlbumName: 'Blood Sugar Sex Magik',
    TrackName: "They're Red Hot",
    Milliseconds: 71941
  },
  {
    AlbumName: 'Milton Nascimento Ao Vivo',
    TrackName: 'Maria, Maria',
    Milliseconds: 72463
  },
  {
    AlbumName: 'Roda De Funk',
    TrackName: 'Divirta-Se (Saindo Da Sua)',
    Milliseconds: 74919
  },
  {
    AlbumName: 'Into The Light',
    TrackName: 'Into The Light',
    Milliseconds: 76303
  },
  { AlbumName: 'Core', TrackName: 'No Memory', Milliseconds: 80613 },
  {
    AlbumName: 'Diver Down',
    TrackName: 'Cathedral',
    Milliseconds: 82860
  },
  {
    AlbumName: 'The Colour And The Shape',
    TrackName: 'Doll',
    Milliseconds: 83487
  },
  {
    AlbumName: 'Prenda Minha',
    TrackName: 'Texto "Verdade Tropical"',
    Milliseconds: 84088
  },
  {
    AlbumName: 'Use Your Illusion II',
    TrackName: 'My World',
    Milliseconds: 84532
  },
  {
    AlbumName: 'Van Halen III',
    TrackName: 'Primary',
    Milliseconds: 86987
  },
  {
    AlbumName: 'Afrociberdelia',
    TrackName: 'Enquanto O Mundo Explode',
    Milliseconds: 88764
  },
  {
    AlbumName: 'Da Lama Ao Caos',
    TrackName: 'Maracatu De Tiro Certeiro',
    Milliseconds: 88868
  },
  {
    AlbumName: 'Bongo Fury',
    TrackName: 'Man With The Woman Head',
    Milliseconds: 88894
  },
  {
    AlbumName: 'Faceless',
    TrackName: 'The Awakening',
    Milliseconds: 89547
  },
  {
    AlbumName: 'My Way: The Best Of Frank Sinatra [Disc 1]',
    TrackName: 'Love And Marriage',
    Milliseconds: 89730
  },
  {
    AlbumName: 'Serie Sem Limite (Disc 1)',
    TrackName: 'Cristina Nº 2',
    Milliseconds: 90148
  }
]

Object.freeze(tests)