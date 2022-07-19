// Import Libraries
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'

// Import Others
import Layout from "layouts/layout"
import { ContactForm, Section, Image } from "elements"
import Seo from "layouts/seo"
import * as styles from "layouts/index.module.css"
const Panels = loadable(() => import('components/panels'));

// Import Components
// import { Panels } from "components"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const tempPanel = {
    data : {
        header : 'Text for header 1',
        media: {
            type: 'image',
            src : 'https://picsum.photos/seed/1/1920/1080/',
            alt: 'On the coast under the bridge'
        },
        content: <>
            <div>
                This is in the content area with a header on the content
            </div>
            <div>
                This is the body
            </div>
        </>,
        footer : 'Text for footer 1'
    },
    // settings: {
    //     media: {
    //         columnSize: '12'
    //     },
    //     content: {
    //         columnSize: '12'
    //     }
    // }
}

// I want its shape to be
const tempPanel2 = {
    data: {
        header : 'Text for header 2',
        media : [
            { 
                type: 'image',
                src : 'https://picsum.photos/seed/2/1920/1080/',
                alt: 'On the coast under the bridge',
            },
            { 
                type: 'image',
                src : 'https://picsum.photos/seed/3/1920/1080/',
                alt: 'On the coast under the bridge',
            },
        ],
        // HTML or Text? Dont use h2, use something similar
        // If html it needs a wrapper !
        content: <>
            <div>
                This is in the content area with a header on the content
            </div>
            <div>
                This is the body
            </div>
        </>,
        footer : 'Text for footer 2'
    },
    settings: {
        media: {
            columnSize: '12'
        },
        content: {
            columnSize: '12'
        }
    }
}

const IndexPage = () => {

  return (
  <>
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div className='columns'>
    <div className="column is-1">
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
    </div>
      </div>
      <h1>
        Under <b>construction!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
      <ContactForm/>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>
 { /*
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
  <Section> as </Section>
    <Panels { ...tempPanel } />
    <Panels { ...tempPanel2 } />
  </>
)}

export default IndexPage
