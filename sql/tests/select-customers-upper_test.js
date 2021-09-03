export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  { LastNameUpper: 'ALMEIDA', FirstName: 'Roberto' },
  { LastNameUpper: 'BERNARD', FirstName: 'Camille' },
  { LastNameUpper: 'BROOKS', FirstName: 'Michelle' },
  { LastNameUpper: 'CUNNINGHAM', FirstName: 'Richard' },
  { LastNameUpper: 'FRANCIS', FirstName: 'Edward' },
  { LastNameUpper: 'GRUBER', FirstName: 'Astrid' },
  { LastNameUpper: 'JOHANSSON', FirstName: 'Joakim' },
  { LastNameUpper: 'KOVáCS', FirstName: 'Ladislav' },
  { LastNameUpper: 'KöHLER', FirstName: 'Leonie' },
  { LastNameUpper: 'LEACOCK', FirstName: 'Heather' },
  { LastNameUpper: 'LEFEBVRE', FirstName: 'Dominique' },
  { LastNameUpper: 'MARTINS', FirstName: 'Eduardo' },
  { LastNameUpper: 'MERCIER', FirstName: 'Isabelle' },
  { LastNameUpper: 'PETERSON', FirstName: 'Jennifer' },
  { LastNameUpper: 'SAMPAIO', FirstName: 'Madalena' },
  { LastNameUpper: 'SCHNEIDER', FirstName: 'Hannah' },
  { LastNameUpper: 'SCHRöDER', FirstName: 'Niklas' },
  { LastNameUpper: 'STEVENS', FirstName: 'Victor' },
  { LastNameUpper: 'TREMBLAY', FirstName: 'François' },
  { LastNameUpper: 'VAN DER BERG', FirstName: 'Johannes' },
  { LastNameUpper: 'WICHTERLOVá', FirstName: 'František' },
  { LastNameUpper: 'WóJCIK', FirstName: 'Stanisław' }
]

Object.freeze(tests)