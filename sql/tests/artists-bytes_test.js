export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'American Idiot',
    MegaBytes: '5.71 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: "Jesus Of Suburbia / City Of The Damned / I Don't Care / Dearly Beloved / Tales Of Another Broken Home",
    MegaBytes: '17.88 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Holiday',
    MegaBytes: '7.6 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Boulevard Of Broken Dreams',
    MegaBytes: '8.49 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Are We The Waiting',
    MegaBytes: '5.33 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'St. Jimmy',
    MegaBytes: '5.72 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Give Me Novacaine',
    MegaBytes: '6.75 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: "She's A Rebel",
    MegaBytes: '3.9 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Extraordinary Girl',
    MegaBytes: '6.98 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Letterbomb',
    MegaBytes: '7.98 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Wake Me Up When September Ends',
    MegaBytes: '9.33 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: "Homecoming / The Death Of St. Jimmy / East 12th St. / Nobody Likes You / Rock And Roll Girlfriend / We're Coming Home Again",
    MegaBytes: '18.14 MB'
  },
  {
    ArtistName: 'Green Day',
    AlbumName: 'American Idiot',
    TrackName: 'Whatsername',
    MegaBytes: '8.24 MB'
  }
]

Object.freeze(tests)