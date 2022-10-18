// Will need an index of named exports until loadable components is added
import loadable from '@loadable/component'

// Declaration of modifiers
const ContactForm = loadable(() => import( `./contactForm` ))
const Container = loadable(() => import( `./container` ))
const Dropdown = loadable(() => import( `./dropdown` ))
const Icon = loadable(() => import( `./icon` ))
const Image = loadable(() => import( `./image` ))
const Link = loadable(() => import( `./link` ))
const Navigation = loadable(() => import( `./navigation` ))
const Section = loadable(() => import( `./section` ))

export {
	ContactForm,
	Container,
	Dropdown,
	Icon,
	Image,
	Link,
	Navigation,
	Section
}