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
	reporter.info( `** BUILD ENVIRONMENT: ${ process.env.GATSBY_CLOUD === `true` ? `GATSBY` : `LOCAL`}` )
	reporter.info( `** BUILD CONTEXT: ${ process.env.NODE_ENV }` )
	reporter.info( `** MODE: ${ process.env.PRODUCTION_MODE ? `PROD` : ( process.env.DEVELOPMENT_MODE ? `DEV` : `UNKNOWN` ) }` )
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
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `

    type ImagesJson implements Node {
      image_data: ImageSharp @link(by: "resize.originalName")
    }

    type PagesJsonLayout implements Node {
      header: HeadersJson @link(by: "title" )
      footer: FootersJson @link(by: "title" )
    }

    type PagesJsonSeo implements Node {
      image: ImagesJson @link(by: "title" )
    }

    type HeadersJsonData implements Node {
      menu: HeaderMenusJson @link(by: "title" )
    }

    type FootersJsonData implements Node {
      menu: FooterMenusJson @link(by: "title" )
    }

    type DefaultSettingsJsonSettings_data implements Node {
      image: ImagesJson @link(by: "title" )
    }

  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {

	let pageCounter = 0

  const { createPage } = actions

  // Lets get our pages:D
  const allPagesQuery = async () =>{
    return await graphql(`
      query MyQuery {
        allPagesJson {
          nodes {
            id
            url
            title
            admin {
              do_not_publish
              is_404
            }
          }
        }
      }
    `)
  }

  await allPagesQuery().then( async ( { data } ) => { 

    const { nodes : pageEntries = [] } = getValue( data, 'allPagesJson', [] )
    
    await Promise.all( pageEntries.map ( async entry => { 
      
      // Production Mode detection
      if ( process.env.PRODUCTION_MODE && getValue( entry, `admin.do_not_publish`, false ) ) {
        
        
				reporter.warn( `Production Mode: Cowardly refusing to create ${ getValue( entry, `title`, false ) } , url: ${ entry?.url } , id: ${ getValue( entry, `id`, false ) }` )

			// Error handling for Ghost Nodes
      } else if ( entry?.url === null ) {

				reporter.warn( `Can't render ${ entry.uid }: url is set to null` )

      } else {

        try {

          const templateFile = path.resolve(`src/templates/pages.js`)

          // Keeping this here for when more templates are created, if ever, might just select it with a field?
    
          // const template = path.resolve(`src/templates/${ type.replace( 'all','').replace( 'Json' , '').toLowerCase() }.js`)


          if ( fs.existsSync( templateFile ) ) {

            createPage({
              path : getValue( entry , `url`, false ),
              component: templateFile,
              // In your blog post template's graphql query, you can use pagePath
              context: {
                pagePath: getValue( entry , `url`, false ),
                id : getValue( entry , `id`, false ),
                is_404 : getValue( entry , `admin.is_404`, false ),
                do_not_publish : getValue( entry , `admin.do_not_publish`, false ),
              },
  
            })

            // When we have many entries, comment this out
            reporter.info( `Created : ${ entry?.url }, id: ${ getValue( entry, `id`, `idError?`)}`)

            pageCounter++
    
          } else {
            
            throw ( `Can't render ${ entry?.url } because the ${ template } template does not exist` )

          }

        } catch ( e ) {
          
          reporter.panic( `Error while processing: ${ entry?.url }, Error: ` , e )

        }

      }
    
      // If we got here shortcircuit, other wise we already did something
      return null
  
    })).catch ( e => {
  
      reporter.panicOnBuild(`Error while in Promise.all for page creation`, e )
  
    })

  })



  reporter.info( `[ PAGE BUILDER ] - Pages Created : ${ pageCounter }` )


}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

  // if (node.internal.type === `PagesJson`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  // }

  // if (node.internal.type === `PostsJson`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  // }

// }

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
// resolve: { //? Maybe do this one later ? instead or plugin-resolve-src
//   modules: [path.resolve(__dirname, "src"), "node_modules"],
// },
// module: {
//   rules: [
//     {
//       test: /\.less$/,
//       use: [
//         // You don't need to add the matching ExtractText plugin
//         // because gatsby already includes it and makes sure it's only
//         // run at the appropriate stages, e.g. not in development
//         loaders.miniCssExtract(),
//         loaders.css({ importLoaders: 1 }),
//         // the postcss loader comes with some nice defaults
//         // including autoprefixer for our configured browsers
//         loaders.postcss(),
//         `less-loader`,
//       ],
//     },
//   ],
// },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//     ],
//   })
// }