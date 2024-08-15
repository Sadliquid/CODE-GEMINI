import { useState } from 'react';
import { Card, Box, CardFooter, Button, Text } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

function ImagesSection() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const images = [
        "src/assets/Ocean.png",
        "src/assets/Night.png",
        "src/assets/CozyWood.png",
    ];

    const handleScrollLeft = () => {
        setScrollPosition(prev => Math.max(prev - 1, 0));
    };

    const handleScrollRight = () => {
        setScrollPosition(prev => Math.min(prev + 1, images.length - 1));
    };

    return (
        <Card display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" overflow="hidden" position="relative">
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
            </Box>
            <CardFooter
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="60px"
                position="absolute"
                bottom="0"
                width="100%"
                p={2}
                bg="white"
                boxShadow="sm"
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Button 
                        onClick={handleScrollLeft}
                        isDisabled={scrollPosition === 0}
                        m={1}
                    >
                        <Text>Previous</Text>
                    </Button>

                    <Button 
                        onClick={handleScrollRight}
                        isDisabled={scrollPosition === images.length - 1}
                        m={1}
                    >
                        <Text>Next</Text>
                    </Button>
                </Box>
            </CardFooter>
        </Card>
    );
}

export default ImagesSection;