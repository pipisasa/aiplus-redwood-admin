// /* eslint-disable */
// // const teachers = require('./_dumps/teacher.json')
// const teachers = require('./_seeds/teachers.json')
// // const teachers = require('./_seeds/teacher_tab.json')
// const axios = require('axios').default
// const fs = require('fs')
// const path = require('path')

// const { PrismaClient } = require('@prisma/client')
// const dotenv = require('dotenv')

// dotenv.config()
// const db = new PrismaClient()

// const MY_API_KEY = ''
// const URL_START = 'https://aiplus.kz/teacher_img/'

// async function* imageIterator() {
//   for (const item of teachers) {
//     // const { data } = await axios.post(
//     //   `https://www.filestackapi.com/api/store/S3?key=${MY_API_KEY}&${new URLSearchParams({ url: `${URL_START}${item.image}` })}`
//     // )
//     const { data: data2 } = await axios.post(
//       `https://www.filestackapi.com/api/store/S3?key=${MY_API_KEY}&${new URLSearchParams({ url: `${URL_START}${item.teacher_img2}` })}`
//     )
//     const result = { ...item, image2: data2.url }
//     yield result
//   }
// }

// async function main() {
//   const newArr = []
//   let i = 0
//   try {
//     console.log('Start!!!!')
//     for await (const item of imageIterator()) {
//       console.log(i++, item.image2, item.teacher_id)
//       newArr.push(item)
//       const result = JSON.stringify(newArr, null, '  ')
//       fs.writeFileSync(
//         path.join(__dirname, '/_seeds/teachers.json'),
//         result
//       )
//     }
//     console.log('All images uploaded!!!!')
//   } catch (error) {
//     console.error(error)
//   }
// }

// // main()

// // // async function renameImages() {
// // //   const links = require('./_.json')
// // //   const newStudents = students.map((item, index) => ({
// // //     ...item,
// // //     image: links[index],
// // //   }))
// // //   fs.writeFileSync(
// // //     path.join(__dirname, '/_seeds/student_tab_with_images.json'),
// // //     JSON.stringify(newStudents, null, '  ')
// // //   )
// // // }

// // // renameImages()

// // // async function foo() {
// // //   const url = 'https://aiplus.kz/teacher_img/1554875193_teacher_img.jpeg'
// // //   const qs = new URLSearchParams({ url }).toString()
// // //   console.log(qs)
// // //   const { data } = await axios.post(
// // //     `https://www.filestackapi.com/api/store/S3?key=${MY_API_KEY}&${qs}`
// // //   )
// // //   console.log(data)
// // // }
// // // foo()

// // async function* updateStudentsIterator() {
// //   for (const item of students) {
// //     const res = await db.student.update({
// //       where: {
// //         id: item.student_id,
// //       },
// //       data: {
// //         image: item.image,
// //       },
// //     })
// //     yield res
// //   }
// // }

// // async function updateStudentsImages() {
// //   try {
// //     let i = 0
// //     for await (const item of updateStudentsIterator()) {
// //       console.log(item.image, item.id, i++)
// //     }
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }

// // updateStudentsImages()

// async function* updateTeachersIterator() {
//   for (const item of teachers) {
//     const res = await db.teacher.update({
//       where: {
//         id: item.teacher_id,
//       },
//       data: {
//         image2: item.image2,
//       },
//     })
//     yield res
//   }
//   yield {}
//   console.log("teachers updated!")
// }

// async function updateImages() {
//   try {
//     let i = 0
//     console.log('Start!!!!')
//     for await (const item of updateTeachersIterator()) {
//       console.log(item.image, item.id, i++)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// updateImages()
