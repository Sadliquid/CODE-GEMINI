/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { Card, Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, HStack, useMediaQuery } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { motion } from "framer-motion";

function MiniPlayer({ songs, currentSongIndex, isPlaying, audioRef, progress, togglePlayPause, handleSliderChange, handleSliderChangeStart, handleSliderChangeEnd, handleNextSong, handlePreviousSong, setProgress }) {
    const [isSmallerThan695px] = useMediaQuery("(max-width: 695px)");
    const [isShorterThan477px] = useMediaQuery("(max-height: 477px)");
    const [isShorterThan400px] = useMediaQuery("(max-height: 400px)");

    // The 2 useEffect hooks below need to be called in this component itself, and cannot depend on the MainCard
    useEffect(() => {
        const updateProgress = () => {
            const duration = audioRef.current.duration || 0;
            const currentTime = audioRef.current.currentTime;
            const progressPercentage = (currentTime / duration) * 100;
            setProgress(progressPercentage || 0);
        };

        audioRef.current.addEventListener("timeupdate", updateProgress);

        const handleSongEnd = () => {
            handleNextSong();
        };

        audioRef.current.addEventListener("ended", handleSongEnd);

        if (isPlaying) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
            audioRef.current.removeEventListener("timeupdate", updateProgress);
            audioRef.current.removeEventListener("ended", handleSongEnd);
        };
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.src = songs[currentSongIndex].audioSrc;
        audioRef.current.load();
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSongIndex]);

    return (
        <>
            {(!isSmallerThan695px && !isShorterThan400px) && (
                <Card 
                    width="100%"
                    height="100%"
                    borderRadius="xl" 
                    padding={4} 
                    boxShadow="xl" 
                    border={"2px solid white"} 
                    backgroundColor="rgba(255, 255, 255, 0.2)" 
                    ml={3} 
                    overflow="hidden"
                >
                    <Box 
                        overflowY="auto"
                        maxHeight="calc(100% - 60px)"
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '0px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'transparent'
                            },
                        }}
                    >
                        {!isShorterThan477px && (
                            <Image
                                src={songs[currentSongIndex].audioCover}
                                borderRadius="lg"
                                width="100%"
                                height="60%"
                                objectFit="cover"
                                sx={{ userSelect: "none" }}
                            />
                        )}
                        <Box mt={isShorterThan477px ? 0 : 3} ml={2}>
                            <Text fontSize={isShorterThan477px ? "xs" : "2xs"} color="white" overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
                                Prakhar's Mini Player
                            </Text>
                            <motion.div
                                key={songs[currentSongIndex].songName}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Text fontWeight="bold" fontSize="lg" color="white" textAlign={"left"} mt={isShorterThan477px ? 4 : -0.5} overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
                                    {songs[currentSongIndex].songName}
                                </Text>
                
                                <Text fontSize="xs" color="white" mt={isShorterThan477px ? 0 : -0.5} overflow="hidden" whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
                                    {songs[currentSongIndex].songArtist}
                                </Text>
                            </motion.div>
                        </Box>
                    </Box>
                
                    <Box display="flex" justifyContent={"center"} mt={isShorterThan477px ? 4 : 2}>
                        <Slider
                            value={progress}
                            onChange={handleSliderChange}
                            onChangeStart={handleSliderChangeStart}
                            onChangeEnd={handleSliderChangeEnd}
                            focusThumbOnChange={false}
                            step={0.05}
                            min={0}
                            max={100}
                            width="90%"
                        >
                            <SliderTrack bg="gray.200">
                                <SliderFilledTrack bg="blue.500" />
                            </SliderTrack>
                            <SliderThumb boxSize={3} />
                        </Slider>
                    </Box>
                
                    <Box display="flex" justifyContent={"center"} mt={isShorterThan477px ? 6 : 4} ml={1} mr={1}>
                        <HStack spacing={4}>
                            <Box as={FaBackward}
                                onClick={handlePreviousSong}
                                aria-label="Previous Song"
                                color="white"
                                boxSize={5}
                                sx={{ cursor: "pointer" }}
                            />
                            {isPlaying ? (
                                <Box as={FaPause}
                                    onClick={togglePlayPause}
                                    aria-label="Play/Pause"
                                    color="white"
                                    boxSize={5}
                                    sx={{ cursor: "pointer" }}
                                />
                            ) : (
                                <Box as={FaPlay}
                                    onClick={togglePlayPause}
                                    aria-label="Play/Pause"
                                    color="white"
                                    boxSize={5}
                                    sx={{ cursor: "pointer" }}
                                />
                            )}
                            <Box as={FaForward}
                                onClick={handleNextSong}
                                aria-label="Next Song"
                                color="white"
                                boxSize={5}
                                sx={{ cursor: "pointer" }}
                            />
                        </HStack>
                    </Box>
                </Card>            
            )}
        </>
    );
}

export default MiniPlayer;
