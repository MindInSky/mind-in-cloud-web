// Import Libraries
import loadable from '@loadable/component'

// Declaration of modifiers
const Panels = loadable(() => import( `./panels` ))

export {
	Panels,
}

// export { default as Panels } from './panels';

// Maybe loadable?

// export * from './panels'