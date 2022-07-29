// Will need an index of named exports until loadable components is added
import loadable from '@loadable/component'

// Declaration of modifiers
const ContactForm = loadable(() => import( `./contactForm` ))
const Container = loadable(() => import( `./container` ))
const Image = loadable(() => import( `./image` ))
const Link = loadable(() => import( `./link` ))
const Section = loadable(() => import( `./section` ))

export {
	ContactForm,
	Container,
	Image,
	Link,
	Section
}