export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    FirstName: 'Aaron',
    LastName: 'Mitchell',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Astrid',
    LastName: 'Gruber',
    InvoicesAverage: 6.088571428571428
  },
  {
    FirstName: 'Bjørn',
    LastName: 'Hansen',
    InvoicesAverage: 5.659999999999999
  },
  {
    FirstName: 'Camille',
    LastName: 'Bernard',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Daan',
    LastName: 'Peeters',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Dan',
    LastName: 'Miller',
    InvoicesAverage: 5.659999999999999
  },
  {
    FirstName: 'Diego',
    LastName: 'Gutiérrez',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Dominique',
    LastName: 'Lefebvre',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Edward',
    LastName: 'Francis',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Ellie',
    LastName: 'Sullivan',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Emma',
    LastName: 'Jones',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Enrique',
    LastName: 'Muñoz',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Fernanda',
    LastName: 'Ramos',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Frank',
    LastName: 'Ralston',
    InvoicesAverage: 6.231428571428571
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    InvoicesAverage: 5.802857142857143
  },
  {
    FirstName: 'François',
    LastName: 'Tremblay',
    InvoicesAverage: 5.659999999999999
  },
  {
    FirstName: 'Fynn',
    LastName: 'Zimmermann',
    InvoicesAverage: 6.231428571428571
  },
  {
    FirstName: 'Hannah',
    LastName: 'Schneider',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Heather',
    LastName: 'Leacock',
    InvoicesAverage: 5.659999999999999
  },
  {
    FirstName: 'Helena',
    LastName: 'Holý',
    InvoicesAverage: 7.088571428571429
  },
  {
    FirstName: 'Hugh',
    LastName: "O'Reilly",
    InvoicesAverage: 6.517142857142857
  },
  {
    FirstName: 'Isabelle',
    LastName: 'Mercier',
    InvoicesAverage: 5.802857142857143
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    InvoicesAverage: 5.660000000000001
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Joakim',
    LastName: 'Johansson',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Johannes',
    LastName: 'Van der Berg',
    InvoicesAverage: 5.8028571428571425
  },
  {
    FirstName: 'John',
    LastName: 'Gordon',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'João',
    LastName: 'Fernandes',
    InvoicesAverage: 5.660000000000001
  },
  {
    FirstName: 'Julia',
    LastName: 'Barnett',
    InvoicesAverage: 6.231428571428572
  },
  {
    FirstName: 'Kara',
    LastName: 'Nielsen',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Kathy',
    LastName: 'Chase',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Ladislav',
    LastName: 'Kovács',
    InvoicesAverage: 6.517142857142857
  },
  {
    FirstName: 'Leonie',
    LastName: 'Köhler',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Lucas',
    LastName: 'Mancini',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Luis',
    LastName: 'Rojas',
    InvoicesAverage: 6.659999999999999
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    InvoicesAverage: 5.659999999999999
  },
  {
    FirstName: 'Madalena',
    LastName: 'Sampaio',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Manoj',
    LastName: 'Pareek',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Marc',
    LastName: 'Dubois',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Mark',
    LastName: 'Taylor',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Martha',
    LastName: 'Silk',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Michelle',
    LastName: 'Brooks',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Niklas',
    LastName: 'Schröder',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Patrick',
    LastName: 'Gray',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Phil',
    LastName: 'Hughes',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Puja',
    LastName: 'Srivastava',
    InvoicesAverage: 6.1066666666666665
  },
  {
    FirstName: 'Richard',
    LastName: 'Cunningham',
    InvoicesAverage: 6.802857142857143
  },
  {
    FirstName: 'Robert',
    LastName: 'Brown',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Stanisław',
    LastName: 'Wójcik',
    InvoicesAverage: 5.3742857142857146
  },
  {
    FirstName: 'Steve',
    LastName: 'Murray',
    InvoicesAverage: 5.374285714285714
  },
  {
    FirstName: 'Terhi',
    LastName: 'Hämäläinen',
    InvoicesAverage: 5.945714285714287
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    InvoicesAverage: 5.517142857142858
  },
  {
    FirstName: 'Victor',
    LastName: 'Stevens',
    InvoicesAverage: 6.088571428571428
  },
  {
    FirstName: 'Wyatt',
    LastName: 'Girard',
    InvoicesAverage: 5.659999999999999
  }
]

Object.freeze(tests)