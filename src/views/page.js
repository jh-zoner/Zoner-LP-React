import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Easy to use phoot editor – Zoner Photo Studio X</title>
        <meta
          property="og:title"
          content="Easy to use phoot editor – Zoner Photo Studio X"
        />
      </Helmet>
    </div>
  )
}

export default Page
