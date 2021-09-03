export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { Identifiant: 1, Nom: 'Adams', Prenom: 'Andrew' },
  { Identifiant: 2, Nom: 'Edwards', Prenom: 'Nancy' },
  { Identifiant: 3, Nom: 'Peacock', Prenom: 'Jane' },
  { Identifiant: 4, Nom: 'Park', Prenom: 'Margaret' },
  { Identifiant: 5, Nom: 'Johnson', Prenom: 'Steve' },
  { Identifiant: 6, Nom: 'Mitchell', Prenom: 'Michael' },
  { Identifiant: 7, Nom: 'King', Prenom: 'Robert' },
  { Identifiant: 8, Nom: 'Callahan', Prenom: 'Laura' }
]

Object.freeze(tests)