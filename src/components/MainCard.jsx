/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { Card, Box, Text, useMediaQuery } from "@chakra-ui/react";
import NotesSection from "./NotesSection";
import ImagesSection from "./ImagesSection";
import MiniPlayer from "./MiniPlayer";

function MainCard() {
    const [isSmallerThan770px] = useMediaQuery("(max-width: 770px)");

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
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
            >
                <Box display="flex" flexDirection="column" height="100%" width="100%">

                    {/* Top half with spacing between Images and Placeholder sections */}
                    <Box display="flex" height="50%" width="100%" marginBottom={3}>
                        <Box width="70%" height="100%" marginRight={3}>
                            <ImagesSection width="100%" height="100%" />
                        </Box>
                        <Box width="30%" height="100%">
                            <MiniPlayer width="100%" height="100%" />
                        </Box>
                    </Box>

                    {/* Bottom half for Notes section with space above it */}
                    <Box height="50%" width="100%">
                        <NotesSection width="100%" height="100%" />
                    </Box>

                </Box>
            </Card>
        </Box>
    );
}

export default MainCard