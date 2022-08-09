// Slugs // ? Is this needed ?
// const { createFilePath } = require(`gatsby-source-filesystem`)
const fs 	 = require( `fs` )
const path = require( `path` )

// Requiere some utilities
// const slugify = 	require( `./src/modifiers/slugify` )

/**
 * onPreInit: 
 *    The first API called during Gatsby execution, runs as soon as plugins are loaded,
 *    before cache initialization and bootstrap preparation.
 */

exports.onPreInit = ({ actions, reporter }) => {

	reporter.info( `` )
	reporter.info( `**********************` )
	reporter.info( `*    MindInWebOps    *` )
	reporter.info( `*  Gatsby Build Info *` )
	reporter.info( `**********************` )
	reporter.info( `` )
	reporter.info( `** BUILD ENVIRONMENT: ${ process.env.GATSBY === `true` ? `GATSBY` : `LOCAL`}` )
	reporter.info( `** BUILD CONTEXT: ${ process.env.CONTEXT || `DEV` }` )
	reporter.info( `** MODE: ${ process.env.PRODUCTION_MODE === `true` ? `PROD` : ( process.env.DEVELOPMENT_MODE === `true` ? `DEV` : `UNKNOWN` ) }` )
	reporter.info( `` )
	// reporter.info( `** NEW VARS TEST: ${ JSON.stringify({ TEST_1: process.env.TEST_1, TEST_2: process.env.TEST_2 }, null, 0 )}` )
	// reporter.info( `` )
	reporter.info( `***********************` )
	reporter.info( `*   End Build Info    *` )
	reporter.info( `***********************` )
	reporter.info( `` )
}

// Pulling in getValue for now
const getValue = ( obj, path, defaultValue = false ) => {

  let args = path.replace( /\.|\[|\]|\'|\"/g, `~` )
    .split( `~` )
    .filter( Boolean )

	return args.reduce(( obj, level ) => obj && obj[level], obj) || defaultValue
}

// By resolving the type inference this will know these are Files
// Should be done by anything that is or has been processed by the transformer
// So we can reuse parts of pages without rewriting them
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `

//     type PagesJsonLayout {
//       header: HeadersJson @link(by: "jsonId")
//       footer: FootersJson @link(by: "jsonId")
//     }

//     type PagesJsonLayoutSeo {
//       seo_image: ImagesJson @link(by: "jsonId")
//     }

//     type PostsJsonLayout {
//       header: HeadersJson @link(by: "jsonId")
//       footer: FootersJson @link(by: "jsonId")
//     }

//     type PostsJsonLayoutSeo {
//       seo_image: ImagesJson @link(by: "jsonId")
//     }

//     type ImagesJson implements Node {
//       image: ImageSharp @link(by: "resize.originalName")
//     }

//     type PagesJsonComponentsPanelsDataMedia {
//       image: ImagesJson @link(by: "jsonId")
//     }

//     type PostsJsonComponentsPanelsDataMedia {
//       image: ImagesJson @link(by: "jsonId")
//     }

//   `
//   createTypes(typeDefs)
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {

// 	let pageCounter = 0

//   const { createPage } = actions

//   // Get our specified types that ARE pages
//   // These are declared in types.json inside data
//   const pageTypesQuery = async () =>{
//     return await graphql(`
//     query MyQuery {
//       allTypesJson(filter: {is_page: {eq: true}}) {
//         nodes {
//           id
//           queryType
//           title
//           is_page
//         }
//       }
//     }
//   `)
//   }
  
//   // Create pages for each json file

//   await pageTypesQuery().then( async ( { data } ) => {
    
//     const { nodes : contentTypes } = getValue( data, 'allTypesJson', [] )

//     await Promise.all( contentTypes.map ( async ( node ) => { 
      
//       const type = getValue( node, 'queryType', false)

//       const template = path.resolve(`src/templates/${ type.replace( 'all','').replace( 'Json' , '').toLowerCase() }.js`)

//       if ( fs.existsSync( template ) && Boolean( type ) ) {
        
//         const contentTypeQuery = async () => {
//           return await graphql(`
//           query MyQuery {
//             ${ type } {
//               nodes {
//                 path
//                 id
//                 do_not_publish
//               }
//             }
//           }
//         `)
//         }
  
//         await contentTypeQuery().then( async ( { data } ) => {
  
//           const  { nodes = [] } = getValue( data, `${type}`, [] ) 
  
//           nodes.map( node => {
  
//             // console.log(`🚀 ~ file: gatsby-node.js ~ line 124 ~ awaitcontentTypeQuery ~ node`, node)
  
//             let slug 

//             if ( type === 'allPagesJson'  ){
              
//               slug = getValue( node , `path`, '' )

//             } else {

//               slug = type.replace( 'all', '/' ).replace( 'Json' , '' ).toLowerCase() + getValue( node , `path`, '' )

//             }

//             try {
              
//               createPage({
//                 path : slug,
//                 component: template,
//                 // In your blog post template's graphql query, you can use pagePath
//                 context: {
//                   pagePath: slug,
//                   id : getValue( node , `id`, false ),
//                   type : type.toLowerCase().replace( `all` , ``).replace( `json` , `Json`)
//                 },
    
//               })

//               reporter.info( `Created : ${ slug }, id: ${ getValue( node, `id`, `idError?`)}`)
//               pageCounter++

//             } catch ( e ) {
              
//               reporter.panicOnBuild( `Error while processing: ${ slug }, id: ${  getValue( node, `id`, `idError?`) }` , e )

//             }

  
//           })
          
  
//         }).catch( e => {

//           reporter.panicOnBuild(`Error while on ContentTypeQuery await`, e )

//         })

//       } else {

//         reporter.warn( `Can't render because the ${ template } template does not exist or type ${type} was not found`  )

//       }
		



//     })).catch ( e => {

//       reporter.panicOnBuild(`Error while in Promise.all for page creating`, e )

//     })

//     reporter.warn( `[ PAGE BUILDER ] - Pages Created : ${ pageCounter }` )

//   // Handle errors
//   }).catch( e => {
  
//     reporter.panicOnBuild(`Error while running GraphQL query for pagesTypesQuery `, e )
  
//     return null
  
//   })



// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `PagesJson`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }

//   // if (node.internal.type === `PostsJson`) {
//   //   const slug = createFilePath({ node, getNode, basePath: `pages` })
//   //   createNodeField({
//   //     node,
//   //     name: `slug`,
//   //     value: slug,
//   //   })
//   // }

// }

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     // resolve: { //? Maybe do this one later ? instead or plugin-resolve-src
//     //   modules: [path.resolve(__dirname, "src"), "node_modules"],
//     // },
//     // module: {
//     //   rules: [
//     //     {
//     //       test: /\.less$/,
//     //       use: [
//     //         // You don't need to add the matching ExtractText plugin
//     //         // because gatsby already includes it and makes sure it's only
//     //         // run at the appropriate stages, e.g. not in development
//     //         loaders.miniCssExtract(),
//     //         loaders.css({ importLoaders: 1 }),
//     //         // the postcss loader comes with some nice defaults
//     //         // including autoprefixer for our configured browsers
//     //         loaders.postcss(),
//     //         `less-loader`,
//     //       ],
//     //     },
//     //   ],
//     // },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//     ],
//   })
// }