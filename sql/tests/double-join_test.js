export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { TrackName: 'Pilot', PlaylistName: 'TV Shows' },
  {
    TrackName: 'Battlestar Galactica: The Story So Far',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'Occupation / Precipice', PlaylistName: 'TV Shows' },
  { TrackName: 'Exodus, Pt. 1', PlaylistName: 'TV Shows' },
  { TrackName: 'Exodus, Pt. 2', PlaylistName: 'TV Shows' },
  { TrackName: 'Collaborators', PlaylistName: 'TV Shows' },
  { TrackName: 'Torn', PlaylistName: 'TV Shows' },
  { TrackName: 'A Measure of Salvation', PlaylistName: 'TV Shows' },
  { TrackName: 'Hero', PlaylistName: 'TV Shows' },
  { TrackName: 'Unfinished Business', PlaylistName: 'TV Shows' },
  { TrackName: 'The Passage', PlaylistName: 'TV Shows' },
  { TrackName: 'The Eye of Jupiter', PlaylistName: 'TV Shows' },
  { TrackName: 'Rapture', PlaylistName: 'TV Shows' },
  {
    TrackName: 'Taking a Break from All Your Worries',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'The Woman King', PlaylistName: 'TV Shows' },
  { TrackName: 'A Day In the Life', PlaylistName: 'TV Shows' },
  { TrackName: 'Dirty Hands', PlaylistName: 'TV Shows' },
  { TrackName: 'Maelstrom', PlaylistName: 'TV Shows' },
  { TrackName: 'The Son Also Rises', PlaylistName: 'TV Shows' },
  { TrackName: 'Crossroads, Pt. 1', PlaylistName: 'TV Shows' },
  { TrackName: 'Crossroads, Pt. 2', PlaylistName: 'TV Shows' },
  {
    TrackName: 'Battlestar Galactica, Pt. 1',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Battlestar Galactica, Pt. 2',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Battlestar Galactica, Pt. 3',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Lost Planet of the Gods, Pt. 1',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Lost Planet of the Gods, Pt. 2',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'The Lost Warrior', PlaylistName: 'TV Shows' },
  { TrackName: 'The Long Patrol', PlaylistName: 'TV Shows' },
  {
    TrackName: 'The Gun On Ice Planet Zero, Pt. 1',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'The Gun On Ice Planet Zero, Pt. 2',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'The Magnificent Warriors', PlaylistName: 'TV Shows' },
  { TrackName: 'The Young Lords', PlaylistName: 'TV Shows' },
  { TrackName: 'The Living Legend, Pt. 1', PlaylistName: 'TV Shows' },
  { TrackName: 'The Living Legend, Pt. 2', PlaylistName: 'TV Shows' },
  { TrackName: 'Fire In Space', PlaylistName: 'TV Shows' },
  { TrackName: 'War of the Gods, Pt. 1', PlaylistName: 'TV Shows' },
  { TrackName: 'War of the Gods, Pt. 2', PlaylistName: 'TV Shows' },
  { TrackName: 'The Man With Nine Lives', PlaylistName: 'TV Shows' },
  { TrackName: 'Murder On the Rising Star', PlaylistName: 'TV Shows' },
  {
    TrackName: 'Greetings from Earth, Pt. 1',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Greetings from Earth, Pt. 2',
    PlaylistName: 'TV Shows'
  },
  { TrackName: "Baltar's Escape", PlaylistName: 'TV Shows' },
  { TrackName: 'Experiment In Terra', PlaylistName: 'TV Shows' },
  { TrackName: 'Take the Celestra', PlaylistName: 'TV Shows' },
  { TrackName: 'The Hand of God', PlaylistName: 'TV Shows' },
  { TrackName: 'Genesis', PlaylistName: 'TV Shows' },
  { TrackName: "Don't Look Back", PlaylistName: 'TV Shows' },
  { TrackName: 'One Giant Leap', PlaylistName: 'TV Shows' },
  { TrackName: 'Collision', PlaylistName: 'TV Shows' },
  { TrackName: 'Hiros', PlaylistName: 'TV Shows' },
  { TrackName: 'Better Halves', PlaylistName: 'TV Shows' },
  { TrackName: 'Nothing to Hide', PlaylistName: 'TV Shows' },
  { TrackName: 'Seven Minutes to Midnight', PlaylistName: 'TV Shows' },
  { TrackName: 'Homecoming', PlaylistName: 'TV Shows' },
  { TrackName: 'Six Months Ago', PlaylistName: 'TV Shows' },
  { TrackName: 'Fallout', PlaylistName: 'TV Shows' },
  { TrackName: 'The Fix', PlaylistName: 'TV Shows' },
  { TrackName: 'Distractions', PlaylistName: 'TV Shows' },
  { TrackName: 'Run!', PlaylistName: 'TV Shows' },
  { TrackName: 'Unexpected', PlaylistName: 'TV Shows' },
  { TrackName: 'Company Man', PlaylistName: 'TV Shows' },
  { TrackName: 'Parasite', PlaylistName: 'TV Shows' },
  { TrackName: '.07%', PlaylistName: 'TV Shows' },
  { TrackName: 'Five Years Gone', PlaylistName: 'TV Shows' },
  { TrackName: 'The Hard Part', PlaylistName: 'TV Shows' },
  { TrackName: 'Landslide', PlaylistName: 'TV Shows' },
  {
    TrackName: 'How to Stop an Exploding Man',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Lost (Pilot, Part 1) [Premiere]',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'Lost (Pilot, Part 2)', PlaylistName: 'TV Shows' },
  { TrackName: 'Tabula Rasa', PlaylistName: 'TV Shows' },
  { TrackName: 'Walkabout', PlaylistName: 'TV Shows' },
  { TrackName: 'White Rabbit', PlaylistName: 'TV Shows' },
  { TrackName: 'House of the Rising Sun', PlaylistName: 'TV Shows' },
  { TrackName: 'The Moth', PlaylistName: 'TV Shows' },
  { TrackName: 'Confidence Man', PlaylistName: 'TV Shows' },
  { TrackName: 'Solitary', PlaylistName: 'TV Shows' },
  { TrackName: 'Raised By Another', PlaylistName: 'TV Shows' },
  {
    TrackName: 'All the Best Cowboys Have Daddy Issues',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'Whatever the Case May Be', PlaylistName: 'TV Shows' },
  { TrackName: 'Hearts and Minds', PlaylistName: 'TV Shows' },
  { TrackName: 'Special', PlaylistName: 'TV Shows' },
  { TrackName: 'Outlaws', PlaylistName: 'TV Shows' },
  { TrackName: '...In Translation', PlaylistName: 'TV Shows' },
  { TrackName: 'Numbers', PlaylistName: 'TV Shows' },
  { TrackName: 'Deus Ex Machina', PlaylistName: 'TV Shows' },
  { TrackName: 'Do No Harm', PlaylistName: 'TV Shows' },
  { TrackName: 'The Greater Good', PlaylistName: 'TV Shows' },
  { TrackName: 'Born to Run', PlaylistName: 'TV Shows' },
  { TrackName: 'Exodus (Part 1)', PlaylistName: 'TV Shows' },
  {
    TrackName: 'Exodus (Part 2) [Season Finale]',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Exodus (Part 3) [Season Finale]',
    PlaylistName: 'TV Shows'
  },
  {
    TrackName: 'Man of Science, Man of Faith (Premiere)',
    PlaylistName: 'TV Shows'
  },
  { TrackName: 'Adrift', PlaylistName: 'TV Shows' },
  { TrackName: 'Orientation', PlaylistName: 'TV Shows' },
  { TrackName: 'Everybody Hates Hugo', PlaylistName: 'TV Shows' },
  { TrackName: '...And Found', PlaylistName: 'TV Shows' },
  { TrackName: 'Abandoned', PlaylistName: 'TV Shows' },
  { TrackName: 'The Other 48 Days', PlaylistName: 'TV Shows' },
  { TrackName: 'What Kate Did', PlaylistName: 'TV Shows' },
  { TrackName: 'The 23rd Psalm', PlaylistName: 'TV Shows' }
]

Object.freeze(tests)