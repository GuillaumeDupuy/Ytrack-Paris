export const tests = []
const t = (f) => tests.push(f)

t(({ eq, rows, sortObjectsInArray }) => eq(rows, sortObjectsInArray(expected)))

const expected = [
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 3.98
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 9.91
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Jack',
    LastName: 'Smith',
    Company: 'Microsoft Corporation',
    InvoiceTotalPrice: 10.91
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 16.86
  },
  {
    FirstName: 'Tim',
    LastName: 'Goyer',
    Company: 'Apple Inc.',
    InvoiceTotalPrice: 1.99
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Jennifer',
    LastName: 'Peterson',
    Company: 'Rogers Canada',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Alexandre',
    LastName: 'Rocha',
    Company: 'Banco do Brasil S.A.',
    InvoiceTotalPrice: 0.99
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'František',
    LastName: 'Wichterlová',
    Company: 'JetBrains s.r.o.',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Mark',
    LastName: 'Philips',
    Company: 'Telus',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 1.98
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 3.96
  },
  {
    FirstName: 'Frank',
    LastName: 'Harris',
    Company: 'Google Inc.',
    InvoiceTotalPrice: 5.94
  },
  {
    FirstName: 'Luís',
    LastName: 'Gonçalves',
    Company: 'Embraer - Empresa Brasileira de Aeronáutica S.A.',
    InvoiceTotalPrice: 8.91
  },
  {
    FirstName: 'Eduardo',
    LastName: 'Martins',
    Company: 'Woodstock Discos',
    InvoiceTotalPrice: 13.86
  },
  {
    FirstName: 'Roberto',
    LastName: 'Almeida',
    Company: 'Riotur',
    InvoiceTotalPrice: 5.94
  }
]

Object.freeze(tests)