/** @format */

import handler from '`GOD/pages/api/hello`'
import Personalinfo from '../Components/Personalinfo'
import Carouselali from '../Components/Carouselali'
import Story from '../Components/Story'
import Video from '../Components/video'
import Hexadragong from '../Components/Hexadragong'
import Navigation from '../Components/Navigation'

const Handler = () => {
	return (
		<>
			<div style={{ marginBottom: '13vh' }}>
				<Navigation />
			</div>
			<Personalinfo />
			<Story />
			<Carouselali />
			<Hexadragong />
			<Video />
		</>
	)
}
export default Handler
