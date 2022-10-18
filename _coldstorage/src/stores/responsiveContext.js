// Responsive Context Wrapper
// Taken from: https://github.com/artsy/fresnel#ssr-example

// Import Libraries
import { createMedia } from "@artsy/fresnel"

// Export these so we can share them app wide
export const breakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
    widescreen: 1216
}

// Our breakpoint definitions
const ExampleAppMedia = createMedia({
	breakpoints: breakpoints
})

// Generate CSS to be injected into the head
export const MediaStyle = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider, SortedBreakpoints } = ExampleAppMedia

// Notes for usage: https://github.com/artsy/fresnel#at
// at = Start of breakpoint to end of breakpoint -1px
// ex at={'mobile'}
// lessThan = Until breakpoint -1px
// ex lessThan={'desktop'}
// greaterThan = from breakpoint until next breakpoint -1px
// ex greaterThan={'tablet'}
// greaterThanOrEqual = from breakpoint onwards
// ex greaterThanOrEqual={'tablet'}
// between = between these breakpoints ( with the higher one -1px)
// ex between = {[ 'mobile', 'tablet' ]} ( 0 to 767 [768 -1px] )

