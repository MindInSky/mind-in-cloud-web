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
  description: 'Mind in sky, feet on the ground'
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
        scrollId = 'hero-top'
        title='Site underconstruction'
        subtitle = 'Currently updating as much as possible, designing with accesibility, performance and responsiveness in mind, final lauch date mid November 2022'
      />
    </Layout>
  )

}

export default Index
