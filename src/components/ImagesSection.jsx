/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react';
import { Card, Box, Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaExpand } from 'react-icons/fa';
import ImageCard from "./ImageCard";

function ImagesSection() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const images = [
        "/assets/images/Photo_1.png",
        "/assets/images/Photo_2.png",
        "/assets/images/Photo_3.png",
        "/assets/images/Photo_4.png",
        "/assets/images/Photo_5.png",
        "/assets/images/Photo_6.png",
        "/assets/images/Photo_7.png",
        "/assets/images/Photo_8.png",
        "/assets/images/Photo_9.png",
        "/assets/images/Photo_10.png",
        "/assets/images/Photo_11.png",
        "/assets/images/Photo_12.png",
        "/assets/images/Photo_13.png",
        "/assets/images/Photo_14.png",
        "/assets/images/Photo_15.png",
        "/assets/images/Photo_16.png",
        "/assets/images/Photo_17.png",
        "/assets/images/Photo_18.png",
        "/assets/images/Photo_19.png",
        "/assets/images/Photo_20.png",
        "/assets/images/Photo_21.png",
        "/assets/images/Photo_22.png",
        "/assets/images/Photo_23.png",
        "/assets/images/Photo_24.png",
        "/assets/images/Photo_25.png",
        "/assets/images/Photo_26.png",
        "/assets/images/Photo_27.png",
        "/assets/images/Photo_28.png",
        "/assets/images/Photo_29.png",
        "/assets/images/Photo_30.png",
        "/assets/images/Photo_31.png"
    ];

    const handleScrollLeft = () => {
        setScrollPosition(prev => Math.max(prev - 1, 0));
        pauseAutoScroll();
    };

    const handleScrollRight = () => {
        setScrollPosition(prev => Math.min(prev + 1, images.length - 1));
        pauseAutoScroll();
    };

    const pauseAutoScroll = () => {
        if (autoScroll !== false) {
            setAutoScroll(false);
            toast.closeAll();
            toast({
                title: "Auto-scroll paused!",
                position: "bottom-right",
                description: "Click on the images to re-enable auto-scroll.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const enableAutoScroll = () => {
        if (autoScroll !== true) {
            setAutoScroll(true);
            toast.closeAll();
            toast({
                title: "Auto-scroll re-enabled",
                position: "bottom-right",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    useEffect(() => {
        if (!autoScroll) return;
        const intervalId = setInterval(() => {
            setScrollPosition(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [autoScroll, images.length]);

    return (
        <>
            <Card
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                overflow="hidden"
                position="relative"
                borderRadius="2xl"
                border="2px solid white"
            >
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
                            transition="transform 1s ease-in-out"
                            cursor={autoScroll ? "default" : "pointer"}
                            width={`${images.length * 100}%`}
                            height="100%"
                            onClick={enableAutoScroll}
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
                        zIndex="docked"
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
                        zIndex="docked"
                    >
                        <ChevronRightIcon boxSize={6} />
                    </Button>
                    <Box
                        position="absolute"
                        top="2"
                        right="2"
                        borderRadius="lg"
                        backgroundColor="rgba(255, 255, 255, 0.2)"
                        boxShadow="md"
                        zIndex="docked"
                        p={2}
                        onClick={() => {
                            setAutoScroll(false);
                            onOpen();
                        }}
                        sx={{ 
                            cursor: "pointer",
                            transition: "0.2s ease-in-out",
                            _hover: {
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                transition: "0.2s ease-in-out"
                            }
                        }}
                    >
                        <FaExpand size={20} color="white" />
                    </Box>
                </Box>
            </Card>
            {/* modal with just the selected expanded image here */}
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton
                        onClick={() => {
                            setAutoScroll(true);
                            onClose();
                        }}
                    />
                    <ModalBody mt={2}>
                        <ImageCard src={images[scrollPosition]} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ImagesSection;