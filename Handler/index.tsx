/** @format */

import handler from '`GOD/pages/api/hello`'
import Personalinfo from '../Components/Personalinfo'
import Carouselali from '../Components/Carouselali'
import Story from '../Components/Story'
import Video from '../Components/video'
import Hexadragong from '../Components/Hexadragong'
import Navigation from '../Components/Navigation'
import { useEffect, useRef, useState, CSSProperties } from 'react'

interface Refs {
	[key: string]: React.RefObject<HTMLDivElement>
}
const Handler: React.FC = () => {
	const refs: Refs = {
		carousel: useRef<HTMLDivElement>(null),
		hexagon: useRef<HTMLDivElement>(null),
		video: useRef<HTMLDivElement>(null),
	}

	const [isScrolled, setIsScrolled] = useState<Record<string, boolean>>(
		Object.fromEntries(Object.keys(refs).map((key) => [key, false]))
	)

	useEffect(() => {
		const handleScroll = () => {
			const yOffset = window.scrollY
			Object.keys(refs).forEach((key) => {
				const refElement = refs[key].current
				if (refElement) {
					const offsetTop = refElement.offsetTop
					const shouldScroll = yOffset > offsetTop / 2
					setIsScrolled((prev) => ({ ...prev, [key]: shouldScroll }))
				}
			})
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [refs])

	return (
		<>
			<Navigation />
			<Story />
			<Personalinfo />
			<div
				ref={refs.carousel}
				style={{
					transform: `${
						isScrolled.carousel ? 'translateX(0)' : 'translateX(-100vw)'
					}`,
				}}>
				<Carouselali />
			</div>
			<div
				ref={refs.hexagon}
				style={{
					transform: `${
						isScrolled.hexagon ? 'translateX(0)' : 'translateX(100vw)'
					}`,
				}}>
				<Hexadragong />
			</div>
			<div
				ref={refs.video}
				style={{
					transform: `${
						isScrolled.video ? 'translateX(0vh)' : 'translateY(100vw)'
					}`,
				}}>
				<Video />
			</div>
		</>
	)
}

export default Handler

// import Personalinfo from '../Components/Personalinfo'
// import Carouselali from '../Components/Carouselali'
// import Story from '../Components/Story'
// import Video from '../Components/video'
// import Hexadragong from '../Components/Hexadragong'
// import Navigation from '../Components/Navigation'
// import { useEffect, useRef, useState, CSSProperties } from 'react'

// interface HandlerProps {}

// interface Refs {
// 	nav: React.RefObject<HTMLDivElement>
// 	personal: React.RefObject<HTMLDivElement>
// 	story: React.RefObject<HTMLDivElement>
// 	carousel: React.RefObject<HTMLDivElement>
// 	hexa: React.RefObject<HTMLDivElement>
// 	video: React.RefObject<HTMLDivElement>
// }

// const Handler: React.FC<HandlerProps> = () => {
// 	const [scrollStates, setScrollStates] = useState({
// 		nav: false,
// 		personal: false,
// 		story: false,
// 		carousel: false,
// 		hexa: false,
// 		video: false,
// 	})

// 	const refs: Refs = {
// 		nav: useRef<HTMLDivElement>(null),
// 		personal: useRef<HTMLDivElement>(null),
// 		story: useRef<HTMLDivElement>(null),
// 		carousel: useRef<HTMLDivElement>(null),
// 		hexa: useRef<HTMLDivElement>(null),
// 		video: useRef<HTMLDivElement>(null),
// 	}

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			Object.keys(refs).forEach((key) => {
// 				const ref = refs[key as keyof Refs]
// 				if (ref.current) {
// 					const yOffset = window.scrollY
// 					const offsetTop = ref.current.offsetTop

// 					// Add your condition based on the yOffset and offsetTop
// 					const shouldAnimate = yOffset > offsetTop

// 					setScrollStates((prev) => ({ ...prev, [key]: true }))
// 				}
// 			})
// 		}

// 		window.addEventListener('scroll', handleScroll)

// 		// Cleanup the event listener on component unmount
// 		return () => {
// 			window.removeEventListener('scroll', handleScroll)
// 		}
// 	}, [refs])

// 	const getAnimatedStyle = (key: keyof Refs): CSSProperties => ({
// 		transition: 'all 0.5s',
// 		opacity: scrollStates[key] ? 1 : 0,
// 	})

// 	return (
// 		<>
// 			<div
// 				style={{ marginBottom: '13vh' }}
// 				className={scrollStates.nav ? 'animatedClass' : ''}>
// 				<Navigation />
// 			</div>
// 			<div style={getAnimatedStyle('personal')}>
// 				<Personalinfo />
// 			</div>
// 			<div
// 				ref={refs.story}
// 				style={getAnimatedStyle('story')}>
// 				<Story />
// 			</div>
// 			<div style={getAnimatedStyle('carousel')}>
// 				<Carouselali />
// 			</div>
// 			<div style={getAnimatedStyle('hexa')}>
// 				<Hexadragong />
// 			</div>
// 			<div style={getAnimatedStyle('video')}>
// 				<Video />
// 			</div>
// 		</>
// 	)
// }

// export default Handler
