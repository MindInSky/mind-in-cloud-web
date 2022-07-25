// Import React
import React from 'react'

// Import Elements
import { Section } from 'elements'

// Import Libraries
import { Media } from 'stores/responsiveContext'

// Import Modifiers
import classy from 'modifiers/classy'

const Panels = props => {

    const {
        className = false
    } = props

    // // I want its shape to be
    // const temp = {
    //     data : {
    //         header : 'Text for header 1',
    //         media: {
    //             type: 'image',
    //             src : 'https://picsum.photos/seed/1/1920/1080/',
    //             alt: 'On the coast under the bridge'
    //         },
    //         content: <>
    //             <div>
    //                 This is in the content area with a header on the content
    //             </div>
    //             <div>
    //                 This is the body
    //             </div>
    //         </>,
    //         footer : 'Text for footer 1'
    //     },
    //     settings: {
    //         media: {
    //             columnSize: '12'
    //         },
    //         content: {
    //             columnSize: '12'
    //         }
    //     }
    // }

    // // I want its shape to be
    // const temp2 = {
    //     data: {
    //         header : 'Text for header 2',
    //         media : [
    //             { 
    //                 type: 'image',
    //                 src : 'https://picsum.photos/seed/2/1920/1080/',
    //                 alt: 'On the coast under the bridge',
    //             },
    //             { 
    //                 type: 'image',
    //                 src : 'https://picsum.photos/seed/3/1920/1080/',
    //                 alt: 'On the coast under the bridge',
    //             },
    //         ],
    //         // HTML or Text? Dont use h2, use something similar
    //         // If html it needs a wrapper !
    //         content: <>
    //             <div>
    //                 This is in the content area with a header on the content
    //             </div>
    //             <div>
    //                 This is the body
    //             </div>
    //         </>,
    //         footer : 'Text for footer 2'
    //     },
    //     settings: {
    //         media: {
    //             columnSize: '12'
    //         },
    //         content: {
    //             columnSize: '12'
    //         }
    //     }
    // }

    // Stuff happens here
    const panelClasses = classy([
        'panels',
        className
    ])

    return ( <>
        <Media lessThan='desktop'>
            {( className, renderChilden ) => {
                const tabletClasses = classy([
                    panelClasses,
                    className
                ])
                return renderChilden && (
                    <Section { ...tabletClasses } >
                        This is a tablet or less panel
                    </Section>
                )
            }}
        </Media>
        <Media greaterThanOrEqual='desktop'>
            {( className, renderChilden ) => {
                const mediaClasses = classy([
                    panelClasses,
                    className
                ])
                return renderChilden && (
                    <Section { ...mediaClasses } >
                        This is a tablet or more panel
                    </Section>
                )
            }}
        </Media>
        </>
    )
}

export default Panels