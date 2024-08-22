import { Box } from '@chakra-ui/react';
import MainCard from '../components/MainCard';
import { useState, useEffect } from 'react';

function Homepage() {
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		const video = document.querySelector('video');
		video.addEventListener('loadeddata', () => {
			setVideoLoaded(true);
		});
	}, []);

	return (
		<>
			<Box position="relative" minHeight="100vh" width="100%" overflow="hidden">
				<Box
					position="absolute"
					top={0}
					left={0}
					width="100%"
					height="100%"
					bgImage="url('src/assets/misc/lofiFirstFrame.png')"
					bgSize="cover"
					bgPosition="center"
					zIndex={-2}
				>
					<video
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							zIndex: -2,
							opacity: videoLoaded ? 1 : 0,
							transition: 'opacity 1s ease-in-out', // Smooth fade-in transition
						}}
					>
						<source src="src/assets/misc/lofiBackground.mp4" type="video/mp4" />
					</video>
				</Box>
				<Box
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg="rgba(0, 0, 0, 0.3)"
				>
					<MainCard />
				</Box>
			</Box>
		</>
	);
}

export default Homepage;
