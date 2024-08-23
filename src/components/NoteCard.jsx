/* eslint-disable react/prop-types */

import { useState, useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import NoteModal from './NoteModal';
import "../../styles/firefly.css";
import "../../scripts/firefly.jsx";

const NoteCard = ({ name, text, images, videos, isTopFour }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Memoize randomDegree to prevent re-calculating on every render
    const randomDegree = useMemo(() => `${Math.floor(Math.random() * 4) + 1}deg`, []);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    // Define styles outside of render
    const cardStyle = {
        display: 'flex',
        // bg: 'yellow.75',
        p: 4,
        borderRadius: 'md',
        boxShadow: 'lg',
        w: '100%',
        h: '200px',
        mb: 3,
        transition: '0.2s ease-in-out',
        transform: `rotate(${randomDegree})`,
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const hoverStyle = {
        transform: 'scale(1.04)',
        transition: '0.2s ease-in-out',
        cursor: 'pointer',
    };

    const beforeStyle = {
        content: '""',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0px',
        height: '0px',
        bg: 'none',
        borderRadius: '50%',
    };

    return (
        <>
            <Box 
                className={isTopFour ? "button-wrapper" : ""}
                mt={5}
                sx={{
                    position: 'relative',
                    _before: {
                        content: `""`,
                        position: 'absolute',
                        top: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '20px',
                        bg: isTopFour ? "#F7D87C" : "cyan",
                        borderRadius: '50%',
                        boxShadow: 'md',
                        zIndex: '100',
                    }
                }}
            >
                {isTopFour && (
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
                    )}
                <Box
                    className="button"
                    sx={{
                        ...cardStyle,
                        _hover: hoverStyle,
                        _before: beforeStyle,
                    }}
                    backgroundColor={isTopFour ? "rgba(255, 255, 255, 0.4)" : "yellow.100"}
                    onClick={handleClick}
                    borderWidth={isTopFour ? "1.5px" : ""}
                    borderColor={isTopFour ? "yellow.100" : ""}
                >
                    <Text
                        fontFamily="'Patrick Hand', sans-serif"
                        fontSize="md"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="normal"
                        wordBreak="break-word"
                        noOfLines={5}
                    >
                        {text}
                    </Text>
                    <Text
                        alignSelf="flex-start"
                        fontStyle="italic"
                        mt="auto"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        maxWidth="100%"
                    >
                        ~ {name}
                    </Text>
                </Box>
            </Box>

            <NoteModal 
                isOpen={isExpanded} 
                onClose={handleClose} 
                name={name} 
                text={text}
                images={images}
                videos={videos}
                isTopFour={isTopFour}
            />
        </>
    );
};

export default NoteCard;