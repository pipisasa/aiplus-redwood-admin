/* eslint-disable */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const tables = require('./tables')

dotenv.config()
const db = new PrismaClient()


async function* iterator() {
  for (const tableName of tables) {
    const data = await db[tableName].findMany()
    fs.writeFile(
      path.join(__dirname, `./_dumps/${tableName}.json`),
      JSON.stringify(data, null, '  '),
      () => {
        console.log(`Table ${tableName} Dumped!`)
      }
    )
  }
}

async function main() {
  for await (_ of iterator()) { }
  console.log("Dumping completed!")
}

main()