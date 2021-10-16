/* eslint-disable */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  console.warn('Please define your seed data.')
  const subjects = require('./_seeds/subject_tab.json')

  const formatedSubjects = subjects.map(item=>({
    id: item.subject_id,
    titleKz: item.subject_title_kz,
    titleRu: item.subject_title_ru,
    descriptionKz: "",
    descriptionRu: "",
  }))

  try {
    console.log("subjects uploading...")
    await db.subject.createMany({
      data: formatedSubjects,
    })
    console.log("subjects uploaded!")
  } catch (error) {

  }

  // const teachers = require('./_seeds/teacher_tab.json')

  // const formatedTeachers = teachers.map(item=>({
  //   id: item.teacher_id,
  //   fioKz: item.teacher_fio_kz,
  //   fioRu: item.teacher_fio_ru,
  //   textKz: item.teacher_text_kz,
  //   textRu: item.teacher_text_ru,
  //   subtitleKz: item.slider_subtitle_kz,
  //   subtitleRu: item.slider_subtitle_ru,
  //   sloganKz: item.teacher_slogan_kz,
  //   sloganRu: item.teacher_slogan_ru,
  //   image: item.teacher_img,
  //   image2: item.teacher_img2,
  //   youtubeVideoId: item.teacher_interview_youtube_id,
  //   orderNum: item.order_num,
  //   urlName: item.teacher_url_name,
  //   cityId: item.teacher_city_id,
  // }));

  // try {
  //   // await db.teacher.deleteMany({
  //   //   where: { id: true }
  //   // })
  //   await db.teacher.createMany({
  //     data: formatedTeachers,
  //   })
  //   console.log("teachers uploaded!")
  // } catch (error) {
  //   console.log(error)
  // }
}

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */

// class SeedTable {
//   data = []
//   oldName = ''
//   model = null
//   name = ''
//   translator = {}
//   constructor(oldName, name, model, translator) {
//     this.oldName = oldName
//     this.model = model
//     this.name = name
//     this.translator = translator
//     // this.formater = formater.bind(this)
//     this.data = require(`./_seeds/${oldName}.json`)
//     this.formater()
//   }

//   formater() {
//     this.formatedData = this.data.map((item) =>
//       Object.fromEntries(
//         Object.keys(item).map((key) => [this.translator[key], item[key]])
//       )
//     )
//   }
// }

// const _Faqs = new SeedTable('faq_tab', 'faq', db.faq, {
//   faq_id: 'id',
//   faq_title_kz: 'titleKz',
//   faq_title_ru: 'titleRu',
//   faq_text_kz: 'descriptionKz',
//   faq_text_ru: 'descriptionRu',
// })

// const _Facts = new SeedTable('fact_tab', 'fact', db.fact, {
//   fact_id: 'id',
//   fact_title_kz: 'titleKz',
//   fact_title_ru: 'titleRu',
//   order_num: 'orderNumber',
//   fact_img: 'image',
// })

// const _Programs = new SeedTable('programm_tab', 'program', db.program, {
//   programm_id: 'id',
//   programm_title_ru: 'titleRu',
//   programm_title_kz: 'titleKz',
//   programm_shortname_ru: 'shortSchoolNameRu',
//   programm_shortname_kz: 'shortSchoolNameKz',
//   programm_fullname_ru: 'fullSchoolNameRu',
//   programm_fullname_kz: 'fullSchoolNameKz',
//   programm_subtitle_ru: 'subTitleRu',
//   programm_subtitle_kz: 'subTitleKz',
//   city: 'city',
//   main_title_ru: 'titleAtRootRu',
//   main_title_kz: 'titleAtRootKz',
//   main_hover_title_ru: 'titleAtRootHoverRu',
//   main_hover_title_kz: 'titleAtRootHoverKz',
//   programm_logo: 'logo',
//   programm_img: 'logoAtRoot',
//   programm_list_img: 'logoAtListOfPrograms',
//   order_num: 'orderNumber',
//   programm_interview_youtube_id: 'youtubeVideoId',
//   video_title_ru: 'videoTitleRu',
//   video_title_kz: 'videoTitleKz',
//   programm_fact_kz: 'factAboutProgramKz',
//   programm_fact_ru: 'factAboutProgramRu',
//   programm_why_title_ru: 'titleWhyRu',
//   programm_why_title_kz: 'titleWhyKz',
//   programm_why_text_kz: 'textWhyKz',
//   programm_why_text_ru: 'textWhyRu',
//   cityId: 0,
// })

// class Main {
//   tables = []
//   constructor({ tables = [] }) {
//     this.tables = tables
//   }
//   addTable(table) {
//     if (table instanceof SeedTable) {
//       this.tables.push(table)
//     }
//   }
//   run() {}
// }

// async function main() {
//   console.warn('Please define your seed data.')

  // const faqs = require('./_seeds/faq_tab.json')
  // const facts = require('./_seeds/fact_tab.json')
  // const programs = require('./_seeds/programm_tab.json')
  // const cities = require('./_seeds/city_tab.json')
  // const students = require('./_seeds/student_tab.json')

  // const formatedFaqs = faqs.map((item) => ({
  //   id: item.faq_id,
  //   titleKz: item.faq_title_kz,
  //   titleRu: item.faq_title_ru,
  //   descriptionKz: item.faq_text_kz,
  //   descriptionRu: item.faq_text_ru,
  // }))
  // const formatedFacts = facts.map((item) => ({
  //   id: item.fact_id,
  //   titleKz: item.fact_title_kz,
  //   titleRu: item.fact_title_ru,
  //   orderNumber: item.order_num,
  //   image: item.fact_img,
  // }))
  // const formatedPrograms = programs.map((item) => ({
  //   id: item.programm_id,
  //   titleRu: item.programm_title_ru,
  //   titleKz: item.programm_title_kz,
  //   shortSchoolNameRu: item.programm_shortname_ru,
  //   shortSchoolNameKz: item.programm_shortname_kz,
  //   fullSchoolNameRu: item.programm_fullname_ru,
  //   fullSchoolNameKz: item.programm_fullname_kz,
  //   subTitleRu: item.programm_subtitle_ru,
  //   subTitleKz: item.programm_subtitle_kz,
  //   city: item.city,
  //   titleAtRootRu: item.main_title_ru,
  //   titleAtRootKz: item.main_title_kz,
  //   titleAtRootHoverRu: item.main_hover_title_ru,
  //   titleAtRootHoverKz: item.main_hover_title_kz,
  //   logo: item.programm_logo,
  //   logoAtRoot: item.programm_img,
  //   logoAtListOfPrograms: item.programm_list_img,
  //   orderNumber: item.order_num,
  //   youtubeVideoId: item.programm_interview_youtube_id,
  //   videoTitleRu: item.video_title_ru,
  //   videoTitleKz: item.video_title_kz,
  //   factAboutProgramKz: item.programm_fact_kz,
  //   factAboutProgramRu: item.programm_fact_ru,
  //   titleWhyRu: item.programm_why_title_ru,
  //   titleWhyKz: item.programm_why_title_kz,
  //   textWhyKz: item.programm_why_text_kz,
  //   textWhyRu: item.programm_why_text_ru,
  //   cityId: item.programm_city_id,
  //   // createdAt: item.created_at,
  //   // updatedAt: item.updated_at,
  //   // School: item.School,
  //   // schoolId: item.schoolId,
  //   // ProgramBenefits: item.ProgramBenefits,
  //   // ProgramWhy: item.ProgramWhy,
  //   // ProgramSubject: item.ProgramSubject,
  //   // cityId: item.cityId,
  // }))

  // const formatedCities = cities.map((item) => ({
  //   id: item.city_id,
  //   name: item.city_title_ru,
  // }))

  // const formatedStudents = students.map((item) => ({
  //   id: item.student_id,
  //   fioKz: item.student_fio_kz,
  //   fioRu: item.student_fio_ru,
  //   image: item.student_img,
  //   beforeBallCount: item.before_ball_count,
  //   afterBallCount: item.after_ball_count,
  //   orderNum: item.order_num,
  //   listOrderNum: item.list_order_num,
  //   descriptionKz: item.student_description_kz,
  //   descriptionRu: item.student_description_ru,
  //   textKz: item.student_text_kz,
  //   textRu: item.student_text_ru,
  //   feedbackKz: item.student_feedback_kz,
  //   feedbackRu: item.student_feedback_ru,
  //   youtubeVideoId: item.student_interview_youtube_id,
  //   sliderSubtitleKz: item.slider_subtitle_kz,
  //   sliderSubtitleRu: item.slider_subtitle_ru,
  //   year: new Date(`${item.year}`),
  //   // createdAt: item.created_at,
  //   // updatedAt: item.updated_at,
  //   programId: item.programm_id,
  //   cityId: item.student_city_id,
  // }))

  // try {
  //   await db.city.createMany({
  //     data: formatedCities,
  //   })
  // } catch (error) {
  //   console.log(error)
  // }
  // try {
  //   await db.faq.createMany({
  //     data: formatedFaqs,
  //   })
  // } catch (error) {
  //   console.log(error)
  // }
  // try {
  //   await db.fact.createMany({
  //     data: formatedFacts,
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  // try {
  //   await db.program.createMany({
  //     data: formatedPrograms,
  //   })
  // } catch (error) {
  //   console.log(error)
  // }
  // try {
  //   await db.student.createMany({
  //     data: formatedStudents,
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  // await Promise.all(
  //   formatedCities.map(async (item) => {
  //     try {
  //       await db.city.create({
  //         data: item,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // )

  // await Promise.all(
  //   formatedFaqs.map(async (item) => {
  //     try {
  //       await db.faq.create({
  //         data: item,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // )

  // await Promise.all(
  //   formatedFacts.map(async (item) => {
  //     try {
  //       await db.fact.create({
  //         data: item,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // )

  // await Promise.all(
  //   formatedPrograms.map(async (item) => {
  //     try {
  //       await db.program.create({
  //         data: item,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // )
  // // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
  // // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
  // return Promise.all(
  //   data.map(async (user) => {
  //     const record = await db.user.create({
  //       data: { name: user.name, email: user.email },
  //     })
  //     console.log(record)
  //   })
  // )
// }

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
