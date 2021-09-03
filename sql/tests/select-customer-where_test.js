export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    CustomerId: 17,
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    Address: '1 Microsoft Way',
    City: 'Redmond',
    State: 'WA',
    Country: 'USA',
    PostalCode: '98052-8300',
    Phone: '+1 (425) 882-8080',
    Fax: '+1 (425) 882-8081',
    Email: 'jacksmith@microsoft.com',
    SupportRepId: 5
  }
]

Object.freeze(tests)