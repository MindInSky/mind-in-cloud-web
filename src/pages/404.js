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
      footer = { false }
      // { ...layout }
      seo = { seo }
    >
      <Hero
        container = { false }
        title = 'Nothing to see here yet.'
        subtitle= 'Currently bringing ideas to life.'
      />
    </Layout>
  )

}

export default Index
