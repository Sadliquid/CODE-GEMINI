/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// This is the main card. The images section, notes section and something else whcih can be placed at top right will be here.
import { Card, Box, Text, useMediaQuery } from "@chakra-ui/react";
import NotesSection from "./NotesSection";
import ImagesSection from "./ImagesSection";
import PlaceholderSection from "./PlaceholderSection";

function MainCard() {
    const [isSmallerThan770px] = useMediaQuery("(max-width: 770px)");

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Card height="98%" width={isSmallerThan770px ? "98%" : "70%"} borderRadius="sm" padding={5}>
                <Box display="flex" flexDirection="column" height="100%" width="100%">

                    {/* Top half with spacing between Images and Placeholder sections */}
                    <Box display="flex" height="50%" width="100%" marginBottom={3}>
                        <Box width="60%" height="100%" marginRight={3}>
                            <ImagesSection width="100%" height="100%" />
                        </Box>
                        <Box width="40%" height="100%">
                            <PlaceholderSection width="100%" height="100%" />
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