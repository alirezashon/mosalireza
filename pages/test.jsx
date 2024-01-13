/** @format */

import { useState, useEffect } from 'react'

const SpeechToTextComponent = () => {
	const [isRecording, setIsRecording] = useState(false)
	const [transcription, setTranscription] = useState('')
	let recognition

	useEffect(() => {
		if ('webkitSpeechRecognition' in window) {
			recognition = new webkitSpeechRecognition()
			recognition.interimResults = true

			recognition.onstart = () => {
				setIsRecording(true)
				console.log('recognition started')
			}

			recognition.onresult = (event) => {
				const result = event.results[0][0].transcript
				console.log(event.result)
				setTranscription(result)
			}

			recognition.onend = () => {
				setIsRecording(false)
			}
		} else {
			console.error('Speech recognition not supported in your browser.')
		}

		return () => {
			if (recognition) {
				recognition.stop()
			}
		}
	}, [])

	const toggleRecording = () => {
		if (isRecording) {
			recognition.stop()
		} else {
			recognition.start()
		}
	}

	return (
		<div>
			<button onClick={toggleRecording}>
				{isRecording ? 'Stop Recording' : 'Start Recording'}
			</button>
			<div>
				<p>Transcription:</p>
				<p>{transcription}</p>
			</div>
		</div>
	)
}

export default SpeechToTextComponent
