// Slugs // ? Is this needed ?
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `PagesJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

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