import { Box } from '@chakra-ui/react';
import MainCard from '../components/MainCard';

function Homepage() {

	return (
		<Box
            position="relative"
            bgImage="url('src/assets/Ocean.png')" 
            bgSize="cover"
            bgPosition="center"
            bgAttachment="fixed" 
            minHeight="100vh"
            width="100%" 
            overflow="hidden" 
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
