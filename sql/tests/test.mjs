import { join as joinPath, dirname } from 'path'
import { fileURLToPath } from 'url'
import { deepStrictEqual } from 'assert'
import Database from 'better-sqlite3'
import * as fs from 'fs'
const { readFile } = fs.promises

global.window = global
global.fetch = (url) => {
  // this is a fake implementation of fetch for the tester
  // -> refer to https://devdocs.io/javascript/global_objects/fetch
  const accessBody = async () => { throw Error('body unavailable') }
  return {
    ok: false,
    type: 'basic',
    status: 500,
    statusText: 'Internal Server Error',
    json: accessBody,
    text: accessBody,
  }
}

const exerciseName = process.argv[2]

const fatal = (...args) => {
  console.error(...args)
  process.exit(1)
}

const { join } = []
const { split } = ''
const eq = (a, b) => {
  const noSplit = !''.split
  const noJoin = ![].join
  String.prototype.split = split
  Array.prototype.join = join
  deepStrictEqual(a, b)
  noSplit && (String.prototype.split = undefined)
  noJoin && (Array.prototype.join = undefined)
  return true
}

if (!exerciseName) fatal('missing exercise, usage:\nnode test exercise-name')

const ifNoEnt = fn => err => {
  if (err.code !== 'ENOENT') throw err
  fn(err)
}
const root = dirname(fileURLToPath(import.meta.url))

const read = (fileName, description) => readFile(fileName, 'utf8').catch(
  ifNoEnt(() => fatal(`Missing ${description} for ${exerciseName}`)),
)

const stackFmt = (err) => {
  if (!(err instanceof Error)) {
    throw Error(`Unexpected type thrown: ${typeof err}. usage: throw Error('my message')`)
  }
  String.prototype.split = split
  Array.prototype.join = join
  return err.stack
}

const sortObjectsInArray = (arr) => arr.map(v => Object.keys(v).sort().reduce(
    (obj, key) => {
      obj[key] = v[key]
      return obj
    },
    {}
  )
)

const main = async () => {
  const query = (await read(`/jail/student/${exerciseName}.sql`, 'student solution')).trim()

  const db = new Database(':memory:')

  const migration = fs.readFileSync(joinPath(root, `chinook.sql`), 'utf8')
  db.exec(migration)

  let rows = null
  if (query.slice(0, 6).toUpperCase() === 'SELECT') {
    rows = sortObjectsInArray(db.prepare(query).all())
  } else {
    db.prepare(query).run()
  }

  const { tests } = await import(joinPath(root, `${exerciseName}_test.js`)).catch((err) => {
    fatal(`Unable to execute ${exerciseName} solution, error:\n${stackFmt(err)}`)
  })

  const tools = { eq, db, rows, sortObjectsInArray, query }
  for (const [i, t] of tests.entries()) {
    try {
      if (!await t(tools)) {
        throw Error('Test failed')
      }
    } catch (err) {
      console.log(`test #${i} failed:\n${t.toString()}\n\nError:`)
      fatal(stackFmt(err))
    }
  }
  console.log(`${exerciseName} passed (${tests.length} tests)`)
}

main().catch((err) => fatal(err.stack))