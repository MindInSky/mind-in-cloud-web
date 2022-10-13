// Import React
import React from 'react'

// Import Layout
import Layout from 'layouts/layout'
import Header from 'layouts/header'

// Import Libraries
import is from 'is_js'
import loadable from '@loadable/component'

// Import Modifiers
// import getValue from 'modifiers/getValue'
/*****************/
/**  Loadables  **/
/*****************/

const Components = {
  // Loadable Blocks
  panels: loadable(() => import( `blocks/panels` )),

}

const seo = {
  url : '/',
  title: 'Welcome',
  description: 'DJEddieG bringing all you need for your celebrations',
}

const Index = () => {

  const Panels = Components['panels']


  return (
    <Layout
      simple = { true }
      // { ...layout }
      seo = { seo }
    >
      This is temporal
    </Layout>
  )

}

export default Index