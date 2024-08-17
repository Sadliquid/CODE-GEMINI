/* eslint-disable react/prop-types */

import { Box, Text } from '@chakra-ui/react';

const NoteCard = ({ name, text }) => {
    const randomDegree = String(Math.floor(Math.random() * 4) + 1) + "deg";

    return (
        <Box
            bg="yellow.100"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            w="200px"
            h="250px"
            position="relative"
            transition="0.2s ease-in-out"
            transform={`rotate(${randomDegree})`}
            _hover={{
                transform: `scale(1.04)`,
                transition: "0.2s ease-in-out",
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
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
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
    );
};

export default NoteCard;