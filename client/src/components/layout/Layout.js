import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
function Layout({children, title, description, keywords}) {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='Lakshay Sharma' />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{minHeight: "80vh"}}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps ={
  title: "Pizza-time App",
  description: "Pizza-time App for pizza lovers. Choose from a variety of exquisite collection of flavors.",
  keywords: "pizza, pizza-time, cheese, margaretta, app",
}
export default Layout
