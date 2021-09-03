export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Country: 'Brazil',
    Continent: 'America'
  },
  {
    FirstName: 'Leonie',
    LastName: 'Köhler',
    Country: 'Germany',
    Continent: 'Europe'
  },
  {
    FirstName: 'François',
    LastName: 'Tremblay',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Bjørn',
    LastName: 'Hansen',
    Country: 'Norway',
    Continent: 'Europe'
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Country: 'Czech Republic',
    Continent: 'Europe'
  },
  {
    FirstName: 'Helena',
    LastName: 'Holý',
    Country: 'Czech Republic',
    Continent: 'Europe'
  },
  {
    FirstName: 'Astrid',
    LastName: 'Gruber',
    Country: 'Austria',
    Continent: 'Europe'
  },
  {
    FirstName: 'Daan',
    LastName: 'Peeters',
    Country: 'Belgium',
    Continent: 'Europe'
  },
  {
    FirstName: 'Kara',
    LastName: 'Nielsen',
    Country: 'Denmark',
    Continent: 'Europe'
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Country: 'Brazil',
    Continent: 'America'
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Country: 'Brazil',
    Continent: 'America'
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Country: 'Brazil',
    Continent: 'America'
  },
  {
    FirstName: 'Fernanda',
    LastName: 'Ramos',
    Country: 'Brazil',
    Continent: 'America'
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Michelle',
    LastName: 'Brooks',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Dan',
    LastName: 'Miller',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Kathy',
    LastName: 'Chase',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Heather',
    LastName: 'Leacock',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'John',
    LastName: 'Gordon',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Frank',
    LastName: 'Ralston',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Victor',
    LastName: 'Stevens',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Richard',
    LastName: 'Cunningham',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Patrick',
    LastName: 'Gray',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Julia',
    LastName: 'Barnett',
    Country: 'USA',
    Continent: 'America'
  },
  {
    FirstName: 'Robert',
    LastName: 'Brown',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Edward',
    LastName: 'Francis',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Martha',
    LastName: 'Silk',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Aaron',
    LastName: 'Mitchell',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'Ellie',
    LastName: 'Sullivan',
    Country: 'Canada',
    Continent: 'America'
  },
  {
    FirstName: 'João',
    LastName: 'Fernandes',
    Country: 'Portugal',
    Continent: 'Europe'
  },
  {
    FirstName: 'Madalena',
    LastName: 'Sampaio',
    Country: 'Portugal',
    Continent: 'Europe'
  },
  {
    FirstName: 'Hannah',
    LastName: 'Schneider',
    Country: 'Germany',
    Continent: 'Europe'
  },
  {
    FirstName: 'Fynn',
    LastName: 'Zimmermann',
    Country: 'Germany',
    Continent: 'Europe'
  },
  {
    FirstName: 'Niklas',
    LastName: 'Schröder',
    Country: 'Germany',
    Continent: 'Europe'
  },
  {
    FirstName: 'Camille',
    LastName: 'Bernard',
    Country: 'France',
    Continent: 'Europe'
  },
  {
    FirstName: 'Dominique',
    LastName: 'Lefebvre',
    Country: 'France',
    Continent: 'Europe'
  },
  {
    FirstName: 'Marc',
    LastName: 'Dubois',
    Country: 'France',
    Continent: 'Europe'
  },
  {
    FirstName: 'Wyatt',
    LastName: 'Girard',
    Country: 'France',
    Continent: 'Europe'
  },
  {
    FirstName: 'Isabelle',
    LastName: 'Mercier',
    Country: 'France',
    Continent: 'Europe'
  },
  {
    FirstName: 'Terhi',
    LastName: 'Hämäläinen',
    Country: 'Finland',
    Continent: 'Europe'
  },
  {
    FirstName: 'Ladislav',
    LastName: 'Kovács',
    Country: 'Hungary',
    Continent: 'Europe'
  },
  {
    FirstName: 'Hugh',
    LastName: "O'Reilly",
    Country: 'Ireland',
    Continent: 'Europe'
  },
  {
    FirstName: 'Lucas',
    LastName: 'Mancini',
    Country: 'Italy',
    Continent: 'Europe'
  },
  {
    FirstName: 'Johannes',
    LastName: 'Van der Berg',
    Country: 'Netherlands',
    Continent: 'Europe'
  },
  {
    FirstName: 'Stanisław',
    LastName: 'Wójcik',
    Country: 'Poland',
    Continent: 'Europe'
  },
  {
    FirstName: 'Enrique',
    LastName: 'Muñoz',
    Country: 'Spain',
    Continent: 'Europe'
  },
  {
    FirstName: 'Joakim',
    LastName: 'Johansson',
    Country: 'Sweden',
    Continent: 'Europe'
  },
  {
    FirstName: 'Emma',
    LastName: 'Jones',
    Country: 'United Kingdom',
    Continent: 'Europe'
  },
  {
    FirstName: 'Phil',
    LastName: 'Hughes',
    Country: 'United Kingdom',
    Continent: 'Europe'
  },
  {
    FirstName: 'Steve',
    LastName: 'Murray',
    Country: 'United Kingdom',
    Continent: 'Europe'
  },
  {
    FirstName: 'Mark',
    LastName: 'Taylor',
    Country: 'Australia',
    Continent: 'Oceania'
  },
  {
    FirstName: 'Diego',
    LastName: 'Gutiérrez',
    Country: 'Argentina',
    Continent: 'America'
  },
  {
    FirstName: 'Luis',
    LastName: 'Rojas',
    Country: 'Chile',
    Continent: 'America'
  },
  {
    FirstName: 'Manoj',
    LastName: 'Pareek',
    Country: 'India',
    Continent: 'Asia'
  },
  {
    FirstName: 'Puja',
    LastName: 'Srivastava',
    Country: 'India',
    Continent: 'Asia'
  }
]

Object.freeze(tests)