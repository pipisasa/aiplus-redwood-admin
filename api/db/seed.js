/* eslint-disable */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
const tables = require('./tables')

dotenv.config()
const db = new PrismaClient()

const reset = "\x1b[0m"
const BBg = '\x1b[40m'//Black
const rBg = '\x1b[41m'
const gBg = '\x1b[42m'
const yBg = '\x1b[43m'
const bBg = '\x1b[44m'
const cBg = '\x1b[45m'//cyan
const wBg = '\x1b[47m'
const BFg = '\x1b[30m'//Black
const rFg = '\x1b[31m'
const gFg = '\x1b[32m'
const yFg = '\x1b[33m'
const bFg = '\x1b[34m'
const cFg = '\x1b[35m'//cyan
const wFg = '\x1b[37m'

async function* iterator() {
  for (const tableName of tables) {
    try {
      const startTime = Date.now()
      console.log(`${reset}Seeding table ${bFg}${tableName}${reset} started!`)
      const dumpData = require(`./_dumps/${tableName}`)
      const data = await db[tableName].createMany({
        data: dumpData
      });
      const diff = Date.now() - startTime;
      console.log(`${reset}Seeding table ${bFg}${tableName}${reset} completed! ${cFg}${diff}ms${reset}`)
      yield data
    } catch (error) {
      console.log(`${reset}${rFg}${error}`)
      yield error
    }
  }
}


async function main() {
  const startTime = Date.now()
  console.log(`${reset}${cFg}Seeding started!${reset}`)
  for await(const item of iterator()){}
  const diff = Date.now() - startTime;
  console.log(`${reset}${gFg}Seeding completed!${reset} ${diff}ms${reset}`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
