// Import Libraries
import loadable from '@loadable/component'

// Declaration of modifiers
const Panels = loadable(() => import( `./panels` ))

export {
	Panels,
}

// Maybe loadable?

// export * from './panels'