// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import BlogAndTagForBlogsLayout from 'src/layouts/BlogAndTagForBlogsLayout'
import TagForBlogsLayout from 'src/layouts/TagForBlogsLayout'
import BlogsLayout from 'src/layouts/BlogsLayout'
import ProgramWhiesLayout from 'src/layouts/ProgramWhiesLayout'
import ProgramBenefitsLayout from 'src/layouts/ProgramBenefitsLayout'
import ProgramSubjectsLayout from 'src/layouts/ProgramSubjectsLayout'
import MenuItemsLayout from 'src/layouts/MenuItemsLayout'
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
        <Set wrap={ProgramWhiesLayout}>
          <Route path="/program-whies/new" page={ProgramWhyNewProgramWhyPage} name="newProgramWhy" />
          <Route path="/program-whies/{id:Int}/edit" page={ProgramWhyEditProgramWhyPage} name="editProgramWhy" />
          <Route path="/program-whies/{id:Int}" page={ProgramWhyProgramWhyPage} name="programWhy" />
          <Route path="/program-whies" page={ProgramWhyProgramWhiesPage} name="programWhies" />
        </Set>
        <Set wrap={ProgramBenefitsLayout}>
          <Route path="/program-benefits/new" page={ProgramBenefitNewProgramBenefitPage} name="newProgramBenefit" />
          <Route path="/program-benefits/{id:Int}/edit" page={ProgramBenefitEditProgramBenefitPage} name="editProgramBenefit" />
          <Route path="/program-benefits/{id:Int}" page={ProgramBenefitProgramBenefitPage} name="programBenefit" />
          <Route path="/program-benefits" page={ProgramBenefitProgramBenefitsPage} name="programBenefits" />
        </Set>
        <Set wrap={ProgramSubjectsLayout}>
          <Route path="/program-subjects/new" page={ProgramSubjectNewProgramSubjectPage} name="newProgramSubject" />
          <Route path="/program-subjects/{id:Int}/edit" page={ProgramSubjectEditProgramSubjectPage} name="editProgramSubject" />
          <Route path="/program-subjects/{id:Int}" page={ProgramSubjectProgramSubjectPage} name="programSubject" />
          <Route path="/program-subjects" page={ProgramSubjectProgramSubjectsPage} name="programSubjects" />
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
        <Set wrap={MenuItemsLayout}>
          <Route path="/menu-items/new" page={MenuItemNewMenuItemPage} name="newMenuItem" />
          <Route path="/menu-items/{id:Int}/edit" page={MenuItemEditMenuItemPage} name="editMenuItem" />
          <Route path="/menu-items/{id:Int}" page={MenuItemMenuItemPage} name="menuItem" />
          <Route path="/menu-items" page={MenuItemMenuItemsPage} name="menuItems" />
        </Set>
        {/*//? Blogs */}
        <Set wrap={BlogAndTagForBlogsLayout}>
          <Route path="/blog-and-tag-for-blogs/new" page={BlogAndTagForBlogNewBlogAndTagForBlogPage} name="newBlogAndTagForBlog" />
          <Route path="/blog-and-tag-for-blogs/{id:Int}/edit" page={BlogAndTagForBlogEditBlogAndTagForBlogPage} name="editBlogAndTagForBlog" />
          <Route path="/blog-and-tag-for-blogs/{id:Int}" page={BlogAndTagForBlogBlogAndTagForBlogPage} name="blogAndTagForBlog" />
          <Route path="/blog-and-tag-for-blogs" page={BlogAndTagForBlogBlogAndTagForBlogsPage} name="blogAndTagForBlogs" />
        </Set>
        <Set wrap={TagForBlogsLayout}>
          <Route path="/tag-for-blogs/new" page={TagForBlogNewTagForBlogPage} name="newTagForBlog" />
          <Route path="/tag-for-blogs/{id:Int}/edit" page={TagForBlogEditTagForBlogPage} name="editTagForBlog" />
          <Route path="/tag-for-blogs/{id:Int}" page={TagForBlogTagForBlogPage} name="tagForBlog" />
          <Route path="/tag-for-blogs" page={TagForBlogTagForBlogsPage} name="tagForBlogs" />
        </Set>
        <Set wrap={BlogsLayout}>
          <Route path="/blogs/new" page={BlogNewBlogPage} name="newBlog" />
          <Route path="/blogs/{id:Int}/edit" page={BlogEditBlogPage} name="editBlog" />
          <Route path="/blogs/{id:Int}" page={BlogBlogPage} name="blog" />
          <Route path="/blogs" page={BlogBlogsPage} name="blogs" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
