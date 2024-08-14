/* eslint-disable no-unused-vars */
// This is the main card. The images section, notes section and something else whcih can be placed at top right will be here.
import { Card, Box } from "@chakra-ui/react";
import NotesSection from "./NotesSection";

function MainCard() {
    return (
        <Box display="flex" justifyContent={"center"} alignItems={"center"} height="100vh">
            <Card height="98%" width="70%" borderRadius={"sm"}>
                {/* <ImagesSection /> */}
                {/* <PlaceholderSection /> */}
                {/* <NotesSection /> */}
            </Card>
        </Box>
    )
}

export default MainCard