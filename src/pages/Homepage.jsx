import { Box } from '@chakra-ui/react';
import MainCard from '../components/MainCard';

function Homepage() {

	return (
		<>
			<Box position="relative" minHeight="100vh" width="100%" overflow="hidden">
				<Box
					position="absolute"
					top={0}
					left={0}
					width="100%"
					height="100%"
					bgImage="url('src/assets/lofiFirstFrame.jpg')"
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
						}}
					>
						<source src="src/assets/lofiBackground.mp4" type="video/mp4" />
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
