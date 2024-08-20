/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Card, Image, Text, Box, HStack, useMediaQuery } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { motion } from "framer-motion";

function CollapsedPlayer({ image, songName, isPlaying, handlePreviousSong, togglePlayPause, handleNextSong }) {
    const [isSmallerThan500px] = useMediaQuery("(max-width: 500px)");
    const [isSmallerThan230px] = useMediaQuery("(max-width: 230px)");
    const [isSmallerThan215px] = useMediaQuery("(max-width: 215px)");

    return (
        <>
            {!isSmallerThan215px && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Card width={isSmallerThan500px ? "100%" : "70%"} height="50px" display="flex" alignItems="center">
                        <Box
                            display="flex"
                            alignItems="center"
                            height="100%"
                            width="100%"
                        >
                            <motion.div
                                key={image}
                                initial={{ scale: 0 }}
                                animate={{ rotate: 180, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                style={{ marginLeft: "5px" }}
                            >
                                <Image
                                    src={image}
                                    borderRadius="md"
                                    minW={"38px"}
                                    width="38px"
                                    minH={"38px"}
                                    height="38px"
                                    objectFit="cover"
                                    sx={{ userSelect: "none" }}
                                />
                            </motion.div>
                            {!isSmallerThan230px && (
                                <motion.div
                                    key={songName}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{ width: "37%" }}
                                >
                                    <Text ml={2} fontSize={"xs"} overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"} color="gray.500">Prakhar's Mini Player</Text>
                                    <Text ml={2} fontSize={"sm"} overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{songName}</Text>
                                </motion.div>
                            )}
                            <HStack spacing={4} ml="auto" mr={4}>
                                <Box as={FaBackward}
                                    onClick={handlePreviousSong}
                                    aria-label="Previous Song"
                                    color="black"
                                    boxSize={4}
                                    sx={{ cursor: "pointer" }}
                                />
                                {isPlaying ? (
                                    <Box as={FaPause}
                                        onClick={togglePlayPause}
                                        aria-label="Play/Pause"
                                        color="black"
                                        boxSize={4}
                                        sx={{ cursor: "pointer" }}
                                    />
                                ) : (
                                    <Box as={FaPlay}
                                        onClick={togglePlayPause}
                                        aria-label="Play/Pause"
                                        color="black"
                                        boxSize={4}
                                        sx={{ cursor: "pointer" }}
                                    />
                                )}
                                <Box as={FaForward}
                                    onClick={handleNextSong}
                                    aria-label="Next Song"
                                    color="black"
                                    boxSize={4}
                                    sx={{ cursor: "pointer" }}
                                />
                            </HStack>
                        </Box>
                    </Card>
                </motion.div>
            )}
        </>
    );
}

export default CollapsedPlayer