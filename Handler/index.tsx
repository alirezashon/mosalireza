/** @format */

import handler from '`GOD/pages/api/hello`'
import Personalinfo from '../Components/Personalinfo'
import Carouselali from '../Components/Carouselali'
import Story from '../Components/Story'
import Video from '../Components/video'
import Hexadragong from '../Components/Hexadragong'
import Navigation from '../Components/Navigation'
import { useEffect, useRef, useState, CSSProperties } from 'react'
import Head from 'next/head'

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
					const shouldScroll = yOffset > offsetTop / 4
					setIsScrolled((prev) => ({ ...prev, [key]: shouldScroll }))
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [refs])
	const content = {
		'@context': 'http://akbariovich.ir',
		'@type': 'Developer',
		headline: 'Web Developer',
		datePublished: '2023-01-01',
		author: {
			'@type': 'Person',
			name: 'Akbariovich',
		},
		description: 'Full stack web developer ',
	}
	return (
		<>
			<Head>
				<title>Alireza Akbari - Web Developer</title>
				<meta
					name='Alireza Akbari'
					content='Alireza Akbari - JavaScript Senior, Web Developer, Data Structure & Scientist'
				/>
				<link
					data-default-icon='https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png'
					rel='icon'
 					href='images/icon.png'
				/>
				<script type='application/ld+json'>{`${content}`}</script>
			</Head>
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
