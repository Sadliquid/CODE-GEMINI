/* eslint-disable react/prop-types */

import { Box, Text } from '@chakra-ui/react';

const NoteCard = ({ text }) => {
    return (
        <Box
            bg="yellow.100"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            transform="rotate(-3deg)"
            w="200px"
            h="250px"
            position="relative"
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
        >
            <Text
                fontFamily="'Patrick Hand', sans-serif"
                fontSize="md"
                color="gray.800"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="normal" // Allows for multi-line truncation
                wordBreak="break-word"
                noOfLines={9}
            >
                {text}
            </Text>
        </Box>
    );
};

export default NoteCard;