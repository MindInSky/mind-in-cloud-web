// Import React
import React from 'react'

// Import Elements
import { Link, Icon } from 'elements'

// Import Layouts
import { Container } from 'layouts'

// Import Modifiers
import classy from 'modifiers/classy'
// import hash from 'modifiers/hash'

// Import Icons
import { RiFacebookFill as FacebookIcon } from '@react-icons/all-files/ri/RiFacebookFill'
import { RiTwitterLine as TwitterIcon } from '@react-icons/all-files/ri/RiTwitterLine'
import { RiSoundcloudLine as SoundcloudIcon } from '@react-icons/all-files/ri/RiSoundcloudLine'
import { RiInstagramLine as InstagramIcon } from '@react-icons/all-files/ri/RiInstagramLine'
import { RiYoutubeLine as YoutubeIcon } from '@react-icons/all-files/ri/RiYoutubeLine'
import { SiMixcloud as MixCloudIcon } from '@react-icons/all-files/si/SiMixcloud'
import { RiTwitchLine as TwitchIcon } from '@react-icons/all-files/ri/RiTwitchLine'

const Footer = props => {

	// Stuff happens here
	const {
		className = false
	} = props

	const footerClasses = classy([
		'footer',
		'navbar',
		// 'is-fixed-bottom',
		'has-background-black',
		className 
	])

	const containerClasses= classy([
		'columns',
		'is-mobile',
		'is-marginless',
		'is-multiline',
		'is-justify-content-center',
	])

	const iconClasses = classy([
		'is-large',
		'social-icon'
	])

	const iconProps = {
		size : '2em'
	}

	const fbLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'facebook-icon',
	])

	const twLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'twitter-icon',
	])

	const igLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'instagram-icon',
	])

	const ytLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'youtube-icon',
	])

	const mxLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'mixcloud-icon',
	])

	const scLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'soundcloud-icon',
	])

	const tcLinkClasses = classy([
		'social-column',
		'column',
		'is-3-mobile',
		'is-narrow-tablet',
		'is-narrow-desktop',		
		'is-narrow-widescreen',
		'is-narrow-fullhd',
		'twitch-icon',
	])
		
		
	return ( 
		<footer { ...footerClasses } >
			<Container type='fluid' { ...containerClasses }>
				<Link
					{ ...fbLinkClasses }
					to = 'https://www.facebook.com/DJEddieG'
				>
					<Icon { ...iconClasses } >
						<FacebookIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...twLinkClasses }
					to = 'https://twitter.com/IamDJEddieG'
				>
					<Icon { ...iconClasses } >
						<TwitterIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...igLinkClasses }
					to = 'https://www.instagram.com/DJEddieGOfficial/'
				>
					<Icon { ...iconClasses } >
						<InstagramIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...ytLinkClasses }
					to = 'https://www.youtube.com/DJEddieGofficial'
				>
					<Icon { ...iconClasses } >
						<YoutubeIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...mxLinkClasses }
					to = 'https://www.mixcloud.com/DJEddieGOfficial/'
				>
					<Icon { ...iconClasses } >
						<MixCloudIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...scLinkClasses }
					to = 'https://soundcloud.com/DJEddieG'
				>
					<Icon { ...iconClasses } >
						<SoundcloudIcon { ...iconProps }/>
					</Icon>
				</Link>
				<Link
					{ ...tcLinkClasses }
					to = 'https://www.twitch.tv/djeddieg'
				>
					<Icon { ...iconClasses } >
						<TwitchIcon { ...iconProps }/>
					</Icon>
				</Link>
			</Container>
		</footer>
	)
}

export default Footer