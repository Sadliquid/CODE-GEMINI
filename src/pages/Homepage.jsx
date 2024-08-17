// This is the homepage, which has the full-sized background image 
import { Box } from '@chakra-ui/react';
import MainCard from '../components/MainCard';

function Homepage() {

	return (
		<Box
            position="relative"
            bgImage="url('src/assets/Ocean.png')" // this is just a placeholder background image
            bgSize="cover"
            bgPosition="center"
            bgAttachment="fixed" // Keeps the background image static
            minHeight="100vh"
            width="100%" // Ensure the width covers the viewport
            overflow="hidden" // Prevents overflow issues
        >
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
	);
}

export default Homepage;
