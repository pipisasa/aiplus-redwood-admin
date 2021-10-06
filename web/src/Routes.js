// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Set wrap={AdminLayout} unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Route path="/faqs/new" page={FaqNewFaqPage} name="newFaq" />
        <Route path="/faqs/{id:Int}/edit" page={FaqEditFaqPage} name="editFaq" />
        <Route path="/faqs/{id:Int}" page={FaqFaqPage} name="faq" />
        <Route path="/faqs" page={FaqFaqsPage} name="faqs" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
