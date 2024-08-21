/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Text } from '@chakra-ui/react';

const NoteModal = ({ isOpen, onClose, name, text, image, video }) => {

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
                <ModalBody p={5}>
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
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NoteModal;
