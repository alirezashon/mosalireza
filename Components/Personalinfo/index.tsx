
import Image from 'next/image'
import styles from './index.module.css'
const Personalinfo = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.detailsBox}>
					<div className={styles.information}>
						<div className={styles.whiteBoard}>
							<p className={styles.text}>Alireza Akbari</p>
							<p className={styles.text}>Web Developer </p>
							<p className={styles.text}>Front&back side of OSI TopLevel layers</p>
							<p className={styles.text}>JavaScript Senior</p>
							<p className={styles.text}>Data Structure & Scientist</p>
						</div>
					</div>
				</div>
				<div className={styles.imageBox}>
					<Image
						draggable='false'
						className={styles.image}
						src={'/alireza.jpg'}
						alt='personal image'
						width={1111}
						height={1111}
					/>
				</div>
			</div>
		</>
	)
}

export default Personalinfo
