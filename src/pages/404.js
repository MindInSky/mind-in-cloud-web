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
  url : `/404`,
  title: `Not Found`,
  description: `Mind in sky, feet on the ground`,
  meta_title : `MindInSky: development, reachable.`,
  meta_description :  `Nothing to see here, let's get you somewhere`
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
        title = "Nothing to see here, let's get you somewhere"
        subtitle= "Currently bringing ideas to life."
      />
    </Layout>
  )

}

export default Index
