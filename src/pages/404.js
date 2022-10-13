// Import React
import React from 'react'

// Import Blocks
import { Hero } from 'blocks'

// Import Layout
import { Layout } from 'layouts'

// Import Libraries
// import is from 'is_js'

// Import Modifiers
// import getValue from 'modifiers/getValue'

const seo = {
  url : '/',
  title: 'Welcome',
  description: 'DJEddieG bringing all you need for your celebrations',
}

const Index = () => {

  return (
    <Layout
      simple = { true }
      // { ...layout }
      seo = { seo }
    >
      <Hero/>
    </Layout>
  )

}

export default Index