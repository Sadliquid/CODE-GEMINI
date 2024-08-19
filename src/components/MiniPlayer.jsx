/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { Card, Box, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { motion } from "framer-motion";

function MiniPlayer() {
    const songs = [
        {
            songName: "Oakscreen",
            songArtist: "Soiboi and Peak Twilight",
            audioSrc: "src/assets/audio/Oakscreen.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Magical Connection",
            songArtist: "Peak Twilight and Prithvi",
            audioSrc: "src/assets/audio/MagicalConnection.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Common Ground",
            songArtist: "Peak Twilight",
            audioSrc: "src/assets/audio/CommonGround.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Tourist",
            songArtist: "Rj Pasin",
            audioSrc: "src/assets/audio/Tourist.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Departure",
            songArtist: "Peak Twilight & S N U G",
            audioSrc: "src/assets/audio/Departure.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Desolation",
            songArtist: "Peak Twilight & mell-ø",
            audioSrc: "src/assets/audio/Desolation.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        },
        {
            songName: "Lunar Shores",
            songArtist: "Peak Twilight & no one's perfect",
            audioSrc: "src/assets/audio/LunarShores.mp3",
            audioCover: "src/assets/audioCovers/PeakTwilight.png"
        }
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(songs[currentSongIndex].audioSrc));
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(songs[currentSongIndex].audioSrc);

        const updateProgress = () => {
            const duration = audioRef.current.duration || 0;
            const currentTime = audioRef.current.currentTime;
            const progressPercentage = (currentTime / duration) * 100;
            setProgress(progressPercentage || 0);
        };

        audioRef.current.addEventListener("timeupdate", updateProgress);

        if (isPlaying) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
            audioRef.current.removeEventListener("timeupdate", updateProgress);
        };
    }, [currentSongIndex, isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleSliderChange = (value) => {
        setProgress(value);
        audioRef.current.currentTime = (audioRef.current.duration * value) / 100;
    };

    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const handlePreviousSong = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
    };

    return (
        <Card width="100%" height="100%" borderRadius="xl" padding={4} boxShadow="xl" border={"2px solid white"} backgroundColor="rgba(255, 255, 255, 0.2)">
            <Image
                src={songs[currentSongIndex].audioCover}
                borderRadius="lg"
                width="100%"
                height="45%"
                objectFit="cover"
            />

            <Box mt={3} ml={2}>
                <Text fontSize="2xs" color="white">
                    Prakhar's Mini Player
                </Text>
                <motion.div
                    key={songs[currentSongIndex].songName}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Text fontWeight="bold" fontSize="lg" color="white" textAlign={"left"} mt={-0.5}>
                        {songs[currentSongIndex].songName}
                    </Text>

                    <Text fontSize="xs" color="white" mt={-0.5}>
                        {songs[currentSongIndex].songArtist}
                    </Text>
                </motion.div>
            </Box>

            <Box display="flex" justifyContent={"center"} mt={2}>
                <Slider
                    value={progress}
                    onChange={handleSliderChange}
                    focusThumbOnChange={false}
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

            <Box display="flex" justifyContent={"center"} mt={4}>
                <HStack spacing={4}>
                    <Box as={FaStepBackward}
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
                    <Box as={FaStepForward}
                        onClick={handleNextSong}
                        aria-label="Next Song"
                        color="white"
                        boxSize={5}
                        sx={{ cursor: "pointer" }}
                    />
                </HStack>
            </Box>
        </Card>
    );
}

export default MiniPlayer;
