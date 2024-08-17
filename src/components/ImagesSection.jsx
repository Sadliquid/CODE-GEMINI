import { useState } from 'react';
import { Card, Box, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ImageCard from "./ImageCard";

function ImagesSection() {
    const [scrollPosition, setScrollPosition] = useState(0);

    // placeholder images
    const images = [
        "src/assets/Ocean.png",
        "src/assets/Night.png",
        "src/assets/CozyWood.png",
        "src/assets/Photo_1.png"
    ];

    const handleScrollLeft = () => {
        setScrollPosition(prev => Math.max(prev - 1, 0));
    };

    const handleScrollRight = () => {
        setScrollPosition(prev => Math.min(prev + 1, images.length - 1));
    };

    return (
        <Card display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="hidden" position="relative" borderRadius={"2xl"} border={"2px solid white"}>
            <Box 
                display="flex"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Box 
                    display="flex"
                    overflow="hidden"
                    width="100%"
                    height="100%"
                >
                    <Box
                        display="flex"
                        flexDirection="row"
                        transform={`translateX(-${scrollPosition * 100}%)`}
                        transition="transform 0.3s ease"
                        width={`${images.length * 100}%`}
                        height="100%"
                    >
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                flexShrink={0}
                                width="100%"
                                height="100%"
                            >
                                <ImageCard src={src} />
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Button
                    onClick={handleScrollLeft}
                    isDisabled={scrollPosition === 0}
                    position="absolute"
                    left="0"
                    top="50%"
                    transform="translateY(-50%)"
                    borderRadius="full"
                    boxShadow="md"
                    p={2}
                    ml={2}
                >
                    <ChevronLeftIcon boxSize={6} />
                </Button>
                <Button
                    onClick={handleScrollRight}
                    isDisabled={scrollPosition === images.length - 1}
                    position="absolute"
                    right="0"
                    top="50%"
                    transform="translateY(-50%)"
                    borderRadius="full"
                    boxShadow="md"
                    p={2}
                    mr={2}
                >
                    <ChevronRightIcon boxSize={6} />
                </Button>
            </Box>
        </Card>
    );
}

export default ImagesSection;