/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
// import { CloseIcon } from '@chakra-ui/icons';
// import { motion } from "framer-motion";
import NoteModal from './NoteModal';

const NoteCard = ({ name, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const randomDegree = String(Math.floor(Math.random() * 4) + 1) + "deg";

    // const [isSmallerThan465px] = useMediaQuery("(max-width: 575px)");

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    return (
        <>
            <Box
                display={"flex"}
                bg="yellow.100"
                p={4}
                borderRadius="md"
                boxShadow="lg"
                w="100%"
                h="250px"
                mb={3}
                transition="0.2s ease-in-out"
                transform={`rotate(${randomDegree})`}
                _hover={{
                    transform: `scale(1.04)`,
                    transition: "0.2s ease-in-out",
                    cursor: "pointer",
                }}
                _before={{
                    content: `""`,
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    bg: 'cyan',
                    borderRadius: '50%',
                    boxShadow: 'md',
                }}
                flexDirection="column"
                justifyContent="space-between"
                onClick={handleClick}
            >
                <Text
                    fontFamily="'Patrick Hand', sans-serif"
                    fontSize="md"
                    color="gray.800"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="normal"
                    wordBreak="break-word"
                    noOfLines={7}
                >
                    {text}
                </Text>
                <Text
                    alignSelf="flex-start"
                    fontStyle={"italic"}
                    mt="auto"
                >
                    ~{" " + name}
                </Text>
            </Box>

            {/* {isExpanded && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="fixed"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    borderRadius={"2xl"}
                    bg="rgba(0, 0, 0, 0.5)"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
                    >
                        <Box
                            bg="yellow.100"
                            p={4}
                            borderRadius="md"
                            boxShadow="lg"
                            width="70%"
                            height="50%"
                            maxHeight="400px"
                            transition="0.2s ease-in-out"
                            overflowY="scroll"
                            overflowX="hidden" 
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
                            <Box
                                position="absolute"
                                top="3%"
                                right={isSmallerThan465px ? "20%" : "18%"}
                                cursor={"pointer"}
                            >
                                <CloseIcon onClick={handleClick}/>
                            </Box>
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
                                fontStyle={"italic"}
                                mt={5}
                            >
                                ~{" " + name}
                            </Text>
                        </Box>
                    </motion.div>
                </Box>
            )} */}
            <NoteModal 
                isOpen={isExpanded} 
                onClose={handleClose} 
                name={name} 
                text={text} 
            />
        </>
    );
};

export default NoteCard;