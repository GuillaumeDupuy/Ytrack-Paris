export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(
  db.prepare(`SELECT * FROM employees WHERE LastName = 'Doe'`).get(),
  {
    EmployeeId: 9,
    LastName: 'Doe',
    FirstName: 'John',
    Title: 'IT Developer',
    ReportsTo: 6,
    BirthDate: '1999-03-18 00:00:00',
    HireDate: '2020-03-18 00:00:00',
    Address: '142 rue Sainte-Catherine',
    City: 'Bordeaux',
    State: 'NA',
    Country: 'France',
    PostalCode: '33000',
    Phone: '+33 6 77 88 99 10',
    Fax: '+33 5 68 89 90 90',
    Email: 'john.doe@gmail.com'
  }
))

Object.freeze(tests)