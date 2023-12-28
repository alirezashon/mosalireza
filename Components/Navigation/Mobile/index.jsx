/** @format */

import { useState, useEffect } from 'react'
import styles from './index.module.css'
import { GiCrossMark } from 'react-icons/gi'
import { PiUserCircleGearFill } from 'react-icons/pi'

const menuItems = [
	{
		name: '(Java / Type) Script',
		option: [
			{
				name: 'back',
				option: [
					'Nodejs',
					'Express',
					'Authenticate',
					'Cryptography',
					'Scrapping',
					'Data Science',
					'API Master',
				],
			},
			{
				name: 'front',
				option: ['React', 'CSS', 'UX', 'UI Designer', 'Responsive'],
			},
		],
	},
	{ name: 'Mobile', option: ['React Native'] },
	{ name: 'Desktop', option: ['Electron'] },
	{ name: 'Database', option: ['MongoDB', 'MySQL'] },
	{ name: 'Python' },
	{ name: 'Jira' },
	{ name: 'Linux' }, 	
]

const Mobile = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOptionOpen, setIsOptionOpen] = useState([])
	const [isSubOptionOpen, setIsSubOptionOpen] = useState([])

	const toggleOption = (index) => {
		setIsOptionOpen((prev) => ({
			...prev,
			[index]: !prev[index],
		}))
	}
	const toggleSubOption = (index) => {
		setIsSubOptionOpen((prev) => ({
			...prev,
			[index]: !prev[index],
		}))
	}
	useEffect(() => {
		const closeNav = (event) => {
			const windowWidth = window.innerWidth
			const clickX = event.clientX

			if (isOpen && clickX < windowWidth * 0.4) {
				setIsOpen(false)
			}
		}
		window.addEventListener('click', closeNav)

		return () => {
			window.removeEventListener('click', closeNav)
		}
	}, [isOpen])

	return (
		<>
			<div className={styles.navbarConatainer}>
				{!isOpen && (
					<button
						className={styles.openIcon}
						onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
				)}
				<div
					className={styles.container}
					style={{
						transform: `${isOpen ? 'translateX(0vw)' : 'translateX(60vw)'}`,
					}}>
					<div className={styles.header}>
						<div className={styles.cross}>
							<GiCrossMark onClick={() => setIsOpen(!isOpen)} />
						</div>
						<h1>web skills</h1>
					</div>
					{menuItems.map((menuItem, index) => (
						<div
							key={index}
							className={styles.dropdown}>
							<div
								className={styles.name}
								onClick={() => toggleOption(index)}>
								{menuItem.name}
								{menuItem.option &&
								<span className={styles.icon}>
									{isOptionOpen[index] ? '▲' : '▼'}{' '}
								</span>}
							</div>
							{menuItem.option &&
								menuItem.option.length > 0 &&
								isOptionOpen[index] && (
									<div className={styles.option}>
										{menuItem.option.map((option, optionIndex) => (
											<div
												key={optionIndex}
												className={styles.option}
												onClick={() => toggleSubOption(optionIndex)}>
												{typeof option === 'string' ? (
													option
												) : (
													<>
														{option.name}
														<span className={styles.icon}>
															{isSubOptionOpen[optionIndex] ? '▲' : '▼'}
														</span>
														{option.option &&
															option.option.length > 0 &&
															isSubOptionOpen[optionIndex] && (
																<div className={styles.subOptions}>
																	{Array.isArray(option.option) === true
																		? option.option.map(
																				(subOption, subOptionIndex) => (
																					<div
																						key={subOptionIndex}
																						className={styles.subOption}>
																						{typeof subOption === 'object'
																							? subOption.name
																							: subOption}
																					</div>
																				)
																		  )
																		: ''}
																</div>
															)}
													</>
												)}
											</div>
										))}
									</div>
								)}
						</div>
					))}
				</div>
				<div></div>
				<div className={styles.profile}>
					<PiUserCircleGearFill size={'6vh'} />
				</div>
			</div>
		</>
	)
}

export default Mobile
