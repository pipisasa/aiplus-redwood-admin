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
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
