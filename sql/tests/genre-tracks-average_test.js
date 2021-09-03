export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Name: 'Sci Fi & Fantasy', AverageDuration: 2911783.0384615385 },
  { Name: 'Science Fiction', AverageDuration: 2625549.076923077 },
  { Name: 'Drama', AverageDuration: 2575283.78125 },
  { Name: 'TV Shows', AverageDuration: 2145041.0215053763 },
  { Name: 'Comedy', AverageDuration: 1585263.705882353 },
  { Name: 'Metal', AverageDuration: 309749.4438502674 },
  { Name: 'Electronica/Dance', AverageDuration: 302985.8 },
  { Name: 'Heavy Metal', AverageDuration: 297452.9285714286 },
  { Name: 'Classical', AverageDuration: 293867.5675675676 },
  { Name: 'Jazz', AverageDuration: 291755.3769230769 },
  { Name: 'Rock', AverageDuration: 283910.0431765613 },
  { Name: 'Blues', AverageDuration: 270359.77777777775 },
  { Name: 'Alternative', AverageDuration: 264058.525 },
  { Name: 'Reggae', AverageDuration: 247177.75862068965 },
  { Name: 'Soundtrack', AverageDuration: 244370.88372093023 },
  { Name: 'Alternative & Punk', AverageDuration: 234353.84939759035 },
  { Name: 'Latin', AverageDuration: 232859.26252158894 },
  { Name: 'Pop', AverageDuration: 229034.10416666666 },
  { Name: 'World', AverageDuration: 224923.82142857142 },
  { Name: 'R&B/Soul', AverageDuration: 220066.8524590164 },
  { Name: 'Bossa Nova', AverageDuration: 219590 },
  { Name: 'Easy Listening', AverageDuration: 189164.20833333334 },
  { Name: 'Hip Hop/Rap', AverageDuration: 178176.2857142857 },
  { Name: 'Opera', AverageDuration: 174813 },
  { Name: 'Rock And Roll', AverageDuration: 134643.5 }
]

Object.freeze(tests)