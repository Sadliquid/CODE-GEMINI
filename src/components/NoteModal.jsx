/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text, Box, Image } from '@chakra-ui/react';
import "../../styles/firefly.css";
import "../../scripts/firefly.jsx";

const NoteModal = ({ isOpen, onClose, name, text, images, videos, isTopFour }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="rgba(0, 0, 0, 0.7)"/>
            <ModalContent
                className='modal-wrapper'
                backgroundColor={isTopFour ? "rgba(255, 255, 255, 0.6)" : "yellow.100"}
                borderWidth={isTopFour ? "5px" : ""}
                borderColor={isTopFour ? "yellow.100" : ""}
                borderRadius="xl"
                boxShadow="lg"
                width="70%"
                height="70%"
                overflowY="auto"
                overflowX="hidden"
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#888',
                        borderRadius: '24px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    },
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#888 #f1f1f1',
                }}
            >
                <ModalCloseButton/>
                <ModalBody p={5} display="flex" flexDir="column" mt={3}>
                    <Box className="modal">
                        <Text
                            fontFamily="'Patrick Hand', sans-serif"
                            fontSize="md"
                            color="gray.800"
                            whiteSpace="pre-line"
                            mt={3}
                        >
                            {text}
                        </Text>
                        <Text
                            alignSelf="flex-start"
                            fontStyle="italic"
                            mt={5}
                        >
                            ~{" " + name}
                        </Text>
                    </Box>
                    {Array.isArray(images) && images.length > 0 && (
                        images.map((image) => (
                            <Image 
                                key={image}
                                src={image}
                                alt="Image"
                                borderRadius="md"
                                mt={5}
                                maxW="400px"
                                objectFit="cover"
                            />
                        ))
                    )}
                    {Array.isArray(videos) && videos.length > 0 && (
                        videos.map((video) => (
                            <Box
                                key={video}
                                mt={5}
                                textAlign="center"
                                maxW="100%"
                            >
                                <video
                                    controls
                                    width="100%"
                                    style={{ maxWidth: "400px", objectFit: "cover" }}
                                >
                                    <source src={video} />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                        ))
                    )}
                    <Box>
                        <span className="dot dot-1"></span>
                        <span className="dot dot-2"></span>
                        <span className="dot dot-3"></span>
                        <span className="dot dot-4"></span>
                        <span className="dot dot-5"></span>
                        <span className="dot dot-6"></span>
                        <span className="dot dot-7"></span>
                        <span className="dot dot-8"></span>
                        <span className="dot dot-9"></span>
                        <span className="dot dot-10"></span>
                        <span className="dot dot-11"></span>
                        <span className="dot dot-12"></span>
                        <span className="dot dot-13"></span>
                        <span className="dot dot-14"></span>
                        <span className="dot dot-15"></span>
                        <span className="dot dot-16"></span>
                        <span className="dot dot-17"></span>
                        <span className="dot dot-18"></span>
                        <span className="dot dot-19"></span>
                        <span className="dot dot-20"></span>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NoteModal;
