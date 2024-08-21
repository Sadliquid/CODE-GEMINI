import { Box } from '@chakra-ui/react';
import MainCard from '../components/MainCard';

function Homepage() {

	return (
		<>
			<Box position="relative" minHeight="100vh" width="100%" overflow="hidden">
				<Box
					as="video"
					src="src/assets/lofiBackground.mp4"
					autoPlay
					loop
					muted
					playsInline
					objectFit="cover"
					position="absolute"
					top={0}
					left={0}
					width="100%"
					height="100%"
					zIndex={-1}
				/>
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
