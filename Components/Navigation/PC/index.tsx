/** @format */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { PiArrowFatLinesDownThin, PiArrowFatLinesUpThin } from 'react-icons/pi'
import Image from 'next/image'

interface MenuItem {
	label: string
	link: string
}

const Menu = () => {
	const [showOptions, setShowOptions] = useState<boolean>(true)
	const [selectedItem, setSelectedItem] = useState<number | null>(null)
	const [isSubOptionOpen, setIsSubOptionOpen] = useState<{
		[key: number]: boolean
	}>({})
	const [navHeight, setNavHeight] = useState<number>(13)

	const items: MenuItem[] = [
		{ label: 'front', link: '/products' },
		{ label: 'back', link: '/Customization' },
		{ label: 'abilities', link: '/present' },
		{ label: 'familiar', link: '/contact-us' },
	]

	const dropdownItems: MenuItem[][] = [
		[
			{ label: 'React', link: '/rings' },
			{ label: 'CSS', link: '/earrings' },
			{ label: 'responsive', link: '/necklaces' },
			{ label: 'UI/UX', link: '/bracelets' },
		],
		[
			{ label: 'Node.js', link: '/rings' },
			{ label: 'Express', link: '/earrings' },
			{ label: 'API Master', link: '/earrings' },
			{ label: 'Authenticate', link: '/necklaces' },
		],
		[
			{ label: 'Data Science', link: '/rings' },
			{ label: 'Cryptography', link: '/bracelets' },
			{ label: 'Scrapping', link: '/watches' },
			{ label: 'No SQL', link: '/watches' },
			{ label: 'SQL', link: '/watches' },
		],
		[
			{ label: 'Mobile developing', link: '/rings' },
			{ label: 'Desktop developing', link: '/rings' },
			{ label: 'Python', link: '/bracelets' },
			{ label: 'Agile', link: '/watches' },
		],
		[],
	]

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY
			currentScrollPos < 799 ? setShowOptions(true) : setShowOptions(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div className={styles.controllerBox}>
				<div
					draggable={true}
					className={styles.controller}
					onMouseOver={() =>
						navHeight === 90 ? setNavHeight(13) : setNavHeight(90)
					}
					style={{ height: `${navHeight}vh`, top: `${navHeight -80}vh` }}></div>
				<div
					className={styles.controllerIconBox}
					style={{ top: `${navHeight - 7}vh ` }}
					onClick={() =>
						navHeight === 67 ? setNavHeight(13) : setNavHeight(67)
					}>
					{navHeight < 22 ? (
						<PiArrowFatLinesDownThin />
					) : (
						<PiArrowFatLinesUpThin />
					)}
				</div>
			</div>

			{/* BREAK OUT THE COMPONENT RENDER FROM A SAME PARRENT FOR ELEMENT BEFORE & AFTER THIS LINE */}

			<div
				style={{
					height: `${navHeight > 55 ? navHeight - 7 : navHeight - 2}vh`,
				}}
				className={`${styles.scrollingDiv} ${
					showOptions ? styles.show : styles.hide
				}`}>
				<div
					className={`${styles.itemsBox} ${
						navHeight > 55 ? styles.openItemsBox : styles.closeItemsBox
					}`}>
					<div className={styles.items}>
						{items.map((menuItem, index) => (
							<div
								key={menuItem.link}
								className={`${navHeight < 55 && styles.link}`}>
								<p className={styles.menuItem}>{menuItem.label}</p>
								<div
									className={styles.subOptionBox}
									style={{ display: `${navHeight < 55 ? 'none' : 'block'}` }}>
									{navHeight > 55 &&
										dropdownItems[index] &&
										dropdownItems[index].map((option, subIndex) => (
											<div
												key={option.link}
												className={`${styles.subOption} ${
													isSubOptionOpen[index] ? styles.showSubOption : ''
												}`}>
												<Link href={option.link}>
													<p className={styles.subOptionItem}>{option.label}</p>
												</Link>
											</div>
										))}
								</div>
							</div>
						))}
					</div>
					{navHeight > 55 && (
						<div className={styles.imageBox}>
							<Image
								className={styles.image}
								src={'/images/akbariovich.jpg'}
								width={1111}
								height={1111}
								alt='Shadomad'
							/>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Menu
