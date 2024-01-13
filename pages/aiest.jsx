/** @format */

import { useEffect, useState } from 'react'
import OpenAI from 'openai'

const TextToSpeechComponent = () => {
	const [inputText, setInputText] = useState('Enter your text here')
	const [audioUrl, setAudioUrl] = useState('')
	const openai = new OpenAI({
		apiKey: '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', // Replace with your OpenAI API key
		dangerouslyAllowBrowser: true,
	})

	useEffect(() => {
		const generateSpeech = async () => {
			try {
				const mp3 = await openai.audio.speech.create({
					model: 'tts-1',
					voice: 'alloy',
					input: inputText,
				})

				const buffer = Buffer.from(await mp3.arrayBuffer())
				const blob = new Blob([buffer], { type: 'audio/mpeg' })
				const url = window.URL.createObjectURL(blob)
				setAudioUrl(url)
			} catch (error) {
				console.error('Error generating speech:', error.message)
			}
		}

		generateSpeech()
	}, [inputText])

	return (
		<div>
			<textarea
				placeholder='Enter your text here'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
			/>
			{audioUrl ? (
				<>
					<audio controls>
						<source
							src={audioUrl}
							type='audio/mpeg'
						/>
						Your browser does not support the audio element.
					</audio>
				</>
			) : (
				<p>Generating speech...</p>
			)}
		</div>
	)
}

export default TextToSpeechComponent

// import { useEffect, useState } from 'react'
// import OpenAI from 'openai'

// const TextToSpeechComponent = () => {
// 	const [audioUrl, setAudioUrl] = useState('')
// 	const openai = new OpenAI({
// 		apiKey: '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', // Replace with your OpenAI API key
// 		dangerouslyAllowBrowser: true,
// 	})

// 	useEffect(() => {
// 		const generateSpeech = async () => {
// 			try {
// 				const mp3 = await openai.audio.speech.create({
// 					model: 'tts-1',
// 					voice: 'alloy',
// 					input: 'Today is a wonderful day to build something people love!',
// 				})

// 				const blob = new Blob([await mp3.arrayBuffer()], { type: 'audio/mpeg' })
// 				const url = window.URL.createObjectURL(blob)
// 				setAudioUrl(url)
// 			} catch (error) {
// 				if (error.response && error.response.status === 429) {
// 					// Rate limit exceeded, wait for some time and retry
// 					setTimeout(() => {
// 						generateSpeech()
// 					}, 60000) // Wait for 60 seconds before retrying
// 				} else {
// 					console.error('Error generating speech:', error.message)
// 				}
// 			}
// 		}

// 		generateSpeech()
// 	}, [])

// 	return (
// 		<div>
// 			{audioUrl ? (
// 				<>
// 					<p>Speech generated successfully!</p>
// 					<audio controls>
// 						<source
// 							src={audioUrl}
// 							type='audio/mpeg'
// 						/>
// 						Your browser does not support the audio element.
// 					</audio>
// 				</>
// 			) : (
// 				<p>Generating speech...</p>
// 			)}
// 		</div>
// 	)
// }

// export default TextToSpeechComponent
