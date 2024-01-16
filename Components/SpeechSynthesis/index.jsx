/** @format */

// import { useState } from 'react'
// import styles from './index.module.css'
// import Head from 'next/head'
// import {main }from '../../pages/aiest'
// const TextToSpeechComponent = () => {
// 	const [textToSpeak, setTextToSpeak] = useState('')
// 	const [language, setLanguage] = useState('fa-IR')
// 	const speakText = () => {
// 		if ('speechSynthesis' in window) {
// 			const synthesis = window.speechSynthesis
// 			const utterance = new SpeechSynthesisUtterance(textToSpeak)
//             utterance.lang = language
//             utterance.grammers = 'fa-IR'

// 			synthesis.speak(utterance)
//             const ali = utterance.getVoices()
// 			console.log(ali)
// 		} else {
// 			console.error('Speech synthesis not supported in your browser.')
// 		}
//     }
//     main()

// 	return (
//         <>

// 			<Head>
// 				<meta charset='UTF-8'></meta>
// 			</Head>
// 			<div className={styles.div}>
// 				<div>
// 					<label>Select Language: </label>
// 					<select
// 						value={language}
// 						onChange={(e) => setLanguage(e.target.value)}>
// 						<option value='en-US'>English (United States)</option>
// 						<option value='es-ES'>Spanish (Spain)</option>
// 						<option value='ja-JP'>Japanise (Spain)</option>
// 						<option value='zh-CN'> Chineese(Spain)</option>
// 						<option value='fa-IR'>Persian (Iran)</option>
// 					</select>
// 				</div>
// 				<textarea
// 					placeholder='Enter text to be spoken...'
// 					value={textToSpeak}
// 					onChange={(e) => setTextToSpeak(e.target.value)}
//                     />
// 				<button onClick={speakText}>yaghyaghil</button>
// 			</div>
//  		</>
// 	)
// }

// export default TextToSpeechComponent

import { useState, useEffect } from 'react'
import Head from 'next/head'

const TextToSpeechComponent = () => {
	const [textToSpeak, setTextToSpeak] = useState('')
	const [language, setLanguage] = useState('en-US')
	const [voices, setVoices] = useState([])

	useEffect(() => {
		// Fetch available voices when the component mounts
		fetchVoices()
	}, [])

	const fetchVoices = () => {
		// Check if speech synthesis is supported
		if ('speechSynthesis' in window) {
			// Fetch available voices and update the state
			const availableVoices = window.speechSynthesis.getVoices()

			setVoices(availableVoices)

			// Add event listener to update voices when the list changes
			window.speechSynthesis.onvoiceschanged = () => {
				const updatedVoices = window.speechSynthesis.getVoices()
				setVoices(updatedVoices)
			}
		} else {
			console.error('Speech synthesis not supported in your browser.')
		}
	}

	const speakText = () => {
		if ('speechSynthesis' in window) {
			const synthesis = window.speechSynthesis
			const utterance = new SpeechSynthesisUtterance(textToSpeak)

			// Set the selected language
			utterance.lang = language

			// Set the selected voice
			utterance.voice = voices.find((voice) => voice.lang === language)

			synthesis.speak(utterance)
		} else {
			console.error('Speech synthesis not supported in your browser.')
		}
	}

	return (
		<>
			<Head>
				<meta charSet='UTF-8'></meta>
			</Head>
			<div>
				<div>
					<label>Select Language: </label>
					<select
						value={language}
						onChange={(e) => setLanguage(e.target.value)}>
						{voices.map((voice) => (
							<option
								key={voice.name}
								value={voice.lang}>
								{voice.name} ({voice.lang})
							</option>
						))}
					</select>
				</div>
				<textarea
					placeholder='Enter text to be spoken...'
					value={textToSpeak}
					onChange={(e) => setTextToSpeak(e.target.value)}
				/>
				<button onClick={speakText}>Speak</button>
			</div>
		</>
	)
}

export default TextToSpeechComponent
