/** @format */

import Image from 'next/image'
import styles from './index.module.css'
const Personalinfo = () => {
	const texts = [
		'Alireza Akbari',
		'Web Developer',
		'Front&back side of OSI TopLevel layers',
		'JavaScript Senior',
		'Data Structure & Scientist',
	]
	return (
		<>
			<div className={styles.container}>
				<div className={styles.detailsBox}>
					<div className={styles.information}>
						<Image
							draggable='false'
							className={styles.image}
							src={'/alireza.jpg'}
							alt='personal image'
							width={1111}
							height={1111}
						/>
						<div className={styles.whiteBoard}>
							{texts.map((txt) => (
								<h1 className={styles.text}> {txt}</h1>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Personalinfo
