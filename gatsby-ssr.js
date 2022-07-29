/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Import React
// const React = require( `react` )

// Import Styles
require( `styles/site.scss` )

// Import React
const React = require( `react` )

// Import Context
const { MediaContextProvider } = require( `stores/responsiveContext` )

exports.wrapRootElement = ({ element }) => {
  return (
    <MediaContextProvider>
      {element}
    </MediaContextProvider>
  )
}

// Add a list of styles that we want to include at the beginning of the `head` tag
// Started to make this a plugin, but only for scripts atm
// Probably should find a way to not load external css anyways...
// exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, getPreBodyComponents }, options ) => {

//   // Get everything in the head
//   const headComponents = getHeadComponents()

//   // Let's pop some tags - https://www.youtube.com/watch?v=QK8mJJJvaes

//   // These tags load FILO - First In Last Out
//   // So put the important junk at the bottom
//   // And these will be inserted AFTER existing styles
//   const styles = {
//     responsive: {
//       type: `text/css`,
//       children: MediaStyle
//     }
//   }
  
  // // Loop through our new styles and inject them
  // Object.keys( styles ).map( ( k ) => {

  //   const { children = false, ...tagProps } = styles[k]

  //   // Put this one at the top
  //   headComponents.push(
  //     <style { ...tagProps } key={ `pop_some_tags_${ k }_style` } data-ssr-inserted>
  //       { children || `` }
  //     </style>
  //   )
  // })
  
//   replaceHeadComponents( headComponents )
// }