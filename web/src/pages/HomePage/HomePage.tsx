import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>Админ панель</h1>
      <p>Добро пожаловать в Админ панель Aiplus.kz</p>
    </>
  )
}

export default HomePage
