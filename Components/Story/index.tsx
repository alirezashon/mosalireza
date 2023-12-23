/** @format */
import { PiHandHeartThin } from 'react-icons/pi'
import { FaHeartbeat } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { useRouter } from 'next/router'

interface Story {
	_id: string
	title: string
	src: string
	price: number
	category: string
	quantity: number
	description: string
	seen?: boolean
}
interface Props {
	data: Story[]
}
const StoryComponent: React.FC = () => {
	const data = [
		{
			_id: '2277137',
			title: 'EBiramoza',
			src: '/alireza.jpg',
			price: 7777777,
			category: 'P&O*S^T$I%T#E^M$',
			quantity: 22,
			description:
				'this post just created for happy freedome to al.akbarporJojegan',
		},
	]
	const [openStory, setOpenStory] = useState<string>()
	const [showStoryBox, setShowStoryBox] = useState(false)
	const [stories, setStories] = useState<Story[]>(
		data?.filter((story: Story) => ({
			story,
			seen: false,
		})) || []
	)
	const [like, setLike] = useState<number[]>([])
	const router = useRouter()
	useEffect(() => {
		const storyHistory: string[] = JSON.parse(
			sessionStorage.getItem('^S&T#o@r%i($*i&N0') || '[]'
		)
		const setSeen: Story[] = []
		stories.map((story) => {
			const seen = storyHistory.find((item) => story._id === item)
				? true
				: false
			setSeen.push({
				...story,
				seen,
			})
		}) || []
		setStories(setSeen)
	}, [stories])
	const showStory = (_id: string) => {
		const storyHistory: string[] = JSON.parse(
			sessionStorage.getItem('^S&T#o@r%i($*i&N0') || '[]'
		)
		storyHistory.push(_id)
		const unique = storyHistory.filter((post, index, self) => {
			return self.indexOf(post) === index
		})
		sessionStorage.setItem('^S&T#o@r%i($*i&N0', JSON.stringify(unique))
		const setSeen: Story[] = []
		stories.map((story) => {
			const seen = storyHistory.find((item) => story._id === item)
				? true
				: false
			setSeen.push({
				...story,
				seen,
			})
		}) || []
		setStories(setSeen)
		setOpenStory(_id)
		setShowStoryBox(true)

		setTimeout(() => {
			setShowStoryBox(false)
			setOpenStory((prevIndex) => prevIndex && prevIndex + 1)
		}, 70000)
	}
	const closeStory = () => {
		setShowStoryBox(false)
	}

	return (
		<>
			<div className={styles.storyBox}>
				{stories.map((story, index) => (
					<div key={story._id}>
						<div
							className={styles.story}
							style={{
								border: `2px solid ${
									openStory === story._id
										? '#dfd688'
										: story.seen
										? 'silver'
										: 'gold'
								}`,
							}}
							onClick={() => showStory(story._id)}>
							<Image
								width={1111}
								height={1111}
								src={story.src}
								alt={`Story ${index + 1}`}
								className={styles.storyBanner}
							/>
						</div>
					</div>
				))}
			</div>
			{showStoryBox && (
				<div className={styles.openStoryContainer}>
					<div className={styles.openStoryInnerSide}>
						{stories.map((story, index) => (
							<div className={styles.openStoryBox} key={index}>
								<div className={styles.openStoryHeader}>
									<AiFillCloseCircle
										className={styles.close}
										onClick={closeStory}
										color={'white'}
										size={'5vh'}
									/>
									<h3 className={styles.title}>{story.title}</h3>
									<FaHeartbeat
										onClick={() => {
											setLike((prev) => {
												if (prev.includes(index)) {
													return prev.filter((item) => item !== index)
												} else {
													return [...prev, index]
												}
											})
										}}
										className={styles.basketBall}
										color={like.includes(index) ? 'red' : 'white'}
										size={'5vh'}
									/>
								</div>
								<div className={styles.openStory}>
									<Image
										width={1111}
										height={1111}
										src={story.src}
										alt={story.title || story.description}
										className={styles.storyShowImage}
										onClick={() =>
											router.push(`http://localhost:3000/Post/${story.title}`)
										}
									/>
									<h6>{story.description}</h6>
								</div>
								<PiHandHeartThin
									size={'4vh'}
									color={'white'}
									className={styles.like}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default StoryComponent
