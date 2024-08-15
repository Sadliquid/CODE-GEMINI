import { Card, Box, useBreakpointValue } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

function ImagesSection() {
    const imagesInView = useBreakpointValue({ base: 1, sm: 2, md: 3 });

    const images = [
        "src/assets/Ocean.png",
        "src/assets/Night.png",
        "src/assets/CozyWood.png",
    ];

    return (
        <Card display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="hidden">
            <Box display="flex" alignItems="center" position="relative" width="100%" height="100%">
                <Box 
                    display="flex" 
                    overflow="scroll"
                    width="100%"
                    css={{
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        flexWrap="nowrap"
                    >
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                flexShrink={0}
                                width={`${100 / imagesInView}%`}
                                boxSizing="border-box"
                                padding="2"
                                margin="0"
                            >
                                <ImageCard src={src} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default ImagesSection;