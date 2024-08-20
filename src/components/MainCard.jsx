/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { Card, Box, Heading, useMediaQuery } from "@chakra-ui/react";
import NotesSection from "./NotesSection";
import ImagesSection from "./ImagesSection";
import MiniPlayer from "./MiniPlayer";

function MainCard() {
    const [isSmallerThan770px] = useMediaQuery("(max-width: 770px)");
    const [isSmallerThan695px] = useMediaQuery("(max-width: 695px)");
    const [isShorterThan400px] = useMediaQuery("(max-height: 400px)");

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" overflow="hidden">
            <Card
                height="98%"
                width={isSmallerThan770px ? "98%" : "80%"}
                borderRadius="2xl"
                padding={5}
                border="2px solid transparent"
                backgroundColor="rgba(255, 255, 255, 0.3)"
                backgroundImage="radial-gradient(circle at top left, silver)"
                backgroundOrigin="border-box"
                backgroundClip="border-box"
                boxShadow="0 2px 3px rgba(0, 0, 0, 0.1), inset 0 0 6px rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(2px)"
                overflow="hidden"
            >
                <Box display="flex" flexDirection="column" height="100%" width="100%">
                    <Heading textAlign={"center"} mt={-2} mb={2} color="white" fontFamily={"cursive"}>Prakhar's Gallery</Heading>
                    <Box display="flex" height="50%" width="100%" marginBottom={3} minHeight="200px">
                        <Box 
                            width={(isSmallerThan695px || isShorterThan400px) ? "100%" : "70%"} 
                            height="100%" 
                            minH={"174px"} 
                            flexGrow={1}
                        >
                            <ImagesSection width="100%" height="100%" />
                        </Box>
                        <Box 
                            width={(isSmallerThan695px || isShorterThan400px) ? "0%" : "30%"} 
                            height="auto"
                        >
                            <MiniPlayer width="100%" height="100%" />
                        </Box>
                    </Box>

                    <Box height="50%" width="100%" flexGrow={1}>
                        <NotesSection width="100%" height="100%" />
                    </Box>

                </Box>
            </Card>
        </Box>
    );
}

export default MainCard;