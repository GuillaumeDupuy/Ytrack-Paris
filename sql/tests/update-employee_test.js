export const tests = []
const t = (f) => tests.push(f)

t(({ eq, db }) => eq(
  db.prepare(`SELECT * FROM employees WHERE EmployeeId = 7`).get(),
  {
    EmployeeId: 7,
    LastName: 'King',
    FirstName: 'Robert',
    Title: 'IT Manager',
    ReportsTo: 1,
    BirthDate: '1970-05-29 00:00:00',
    HireDate: '2004-01-02 00:00:00',
    Address: '590 Columbia Boulevard West',
    City: 'Lethbridge',
    State: 'AB',
    Country: 'Canada',
    PostalCode: 'T1K 5N8',
    Phone: '+1 (403) 456-9986',
    Fax: '+1 (403) 456-8485',
    Email: 'robert@chinookcorp.com'
  }
))

Object.freeze(tests)