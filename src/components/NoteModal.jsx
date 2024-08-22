/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text, Box, Image } from '@chakra-ui/react';

const NoteModal = ({ isOpen, onClose, name, text, images, videos }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="rgba(0, 0, 0, 0.5)"/>
            <ModalContent
                bg="yellow.100"
                borderRadius="md"
                boxShadow="lg"
                width="70%"
                height="70%"
                overflowY="auto"
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                        borderRadius: '0px 24px 24px 0px',
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
                    <Box>
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
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NoteModal;
