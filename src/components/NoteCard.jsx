/* eslint-disable react/prop-types */

import { useState, useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import NoteModal from './NoteModal';

const NoteCard = ({ name, text, image, video }) => {
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
        bg: 'yellow.100',
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
        width: '20px',
        height: '20px',
        bg: 'cyan',
        borderRadius: '50%',
        boxShadow: 'md',
    };

    return (
        <>
            <Box
                sx={{
                    ...cardStyle,
                    _hover: hoverStyle,
                    _before: beforeStyle,
                }}
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
                    noOfLines={5}
                >
                    {text}
                </Text>
                <Text
                    alignSelf="flex-start"
                    fontStyle="italic"
                    mt="auto"
                >
                    ~ {name}
                </Text>
            </Box>

            <NoteModal 
                isOpen={isExpanded} 
                onClose={handleClose} 
                name={name} 
                text={text}
                image={image}
                video={video}
            />
        </>
    );
};

export default NoteCard;