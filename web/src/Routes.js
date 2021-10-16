// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import SubjectsLayout from 'src/layouts/SubjectsLayout'
import TeachersLayout from 'src/layouts/TeachersLayout'
import StudentsLayout from 'src/layouts/StudentsLayout'
import CitiesLayout from 'src/layouts/CitiesLayout'
import ProgramsLayout from 'src/layouts/ProgramsLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Set wrap={AdminLayout} unauthenticated="login">
        {/*//? Home */}
        <Route path="/" page={HomePage} name="home" />
        {/*//? Faqs */}
        <Route path="/faqs/new" page={FaqNewFaqPage} name="newFaq" />
        <Route path="/faqs/{id:Int}/edit" page={FaqEditFaqPage} name="editFaq" />
        <Route path="/faqs/{id:Int}" page={FaqFaqPage} name="faq" />
        <Route path="/faqs" page={FaqFaqsPage} name="faqs" />
        {/*//? Facts */}
        <Route path="/facts/new" page={FactNewFactPage} name="newFact" />
        <Route path="/facts/{id:Int}/edit" page={FactEditFactPage} name="editFact" />
        <Route path="/facts/{id:Int}" page={FactFactPage} name="fact" />
        <Route path="/facts" page={FactFactsPage} name="facts" />
        {/*//? Features */}
        <Route path="/features/new" page={FeatureNewFeaturePage} name="newFeature" />
        <Route path="/features/{id:Int}/edit" page={FeatureEditFeaturePage} name="editFeature" />
        <Route path="/features/{id:Int}" page={FeatureFeaturePage} name="feature" />
        <Route path="/features" page={FeatureFeaturesPage} name="features" />
        {/*//? Programs */}
        <Set wrap={ProgramsLayout}>
          <Route path="/programs/new" page={ProgramNewProgramPage} name="newProgram" />
          <Route path="/programs/{id:Int}/edit" page={ProgramEditProgramPage} name="editProgram" />
          <Route path="/programs/{id:Int}" page={ProgramProgramPage} name="program" />
          <Route path="/programs" page={ProgramProgramsPage} name="programs" />
        </Set>

        <Set wrap={CitiesLayout}>
          <Route path="/cities/new" page={CityNewCityPage} name="newCity" />
          <Route path="/cities/{id:Int}/edit" page={CityEditCityPage} name="editCity" />
          <Route path="/cities/{id:Int}" page={CityCityPage} name="city" />
          <Route path="/cities" page={CityCitiesPage} name="cities" />
        </Set>

        <Set wrap={StudentsLayout}>
          <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
          <Route path="/students/{id:Int}/edit" page={StudentEditStudentPage} name="editStudent" />
          <Route path="/students/{id:Int}" page={StudentStudentPage} name="student" />
          <Route path="/students" page={StudentStudentsPage} name="students" />
        </Set>

        <Set wrap={TeachersLayout}>
          <Route path="/teachers/new" page={TeacherNewTeacherPage} name="newTeacher" />
          <Route path="/teachers/{id:Int}/edit" page={TeacherEditTeacherPage} name="editTeacher" />
          <Route path="/teachers/{id:Int}" page={TeacherTeacherPage} name="teacher" />
          <Route path="/teachers" page={TeacherTeachersPage} name="teachers" />
        </Set>
        <Set wrap={SubjectsLayout}>
          <Route path="/subjects/new" page={SubjectNewSubjectPage} name="newSubject" />
          <Route path="/subjects/{id:Int}/edit" page={SubjectEditSubjectPage} name="editSubject" />
          <Route path="/subjects/{id:Int}" page={SubjectSubjectPage} name="subject" />
          <Route path="/subjects" page={SubjectSubjectsPage} name="subjects" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
