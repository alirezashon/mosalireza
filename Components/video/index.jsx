/** @format */

import { useState, useRef } from 'react'
import styles from './index.module.css'
const VideoPlayer = () => {
	return (
		<div className={styles.container}>
			<video
				controls
				className={styles.video}>
				<source
					src='/ElectronicAtom.mp4'
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default VideoPlayer
