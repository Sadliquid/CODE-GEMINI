/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useState, useRef } from "react";
import { Card, Box, Heading, useMediaQuery, IconButton } from "@chakra-ui/react";
import NotesSection from "./NotesSection";
import ImagesSection from "./ImagesSection";
import MiniPlayer from "./MiniPlayer";
import CollapsedPlayer from "./CollapsedPlayer";
import { FaCompress, FaExpand } from "react-icons/fa";

function MainCard() {
    const [isSmallerThan770px] = useMediaQuery("(max-width: 770px)");
    const [isSmallerThan695px] = useMediaQuery("(max-width: 695px)");
    const [isSmallerThan430px] = useMediaQuery("(max-width: 430px)");
    const [isShorterThan400px] = useMediaQuery("(max-height: 400px)");

    const [isMinimized, setIsMinimized] = useState(false);

    // These props need to be passed to the MiniPlayer and CollapsedPlayer components
    const songs = [
        {
            songName: "Smoke and Chill",
            songArtist: "Gaming Sensei",
            audioSrc: "/assets/audio/SmokeNChill.mp3",
            audioCover: "/assets/audioCovers/SmokeNChill.png"
        },
        {
            songName: "Oakscreen",
            songArtist: "Soiboi and Peak Twilight",
            audioSrc: "/assets/audio/Oakscreen.mp3",
            audioCover: "/assets/audioCovers/Oakscreen.png"
        },
        {
            songName: "Magical Connection",
            songArtist: "Peak Twilight and Prithvi",
            audioSrc: "/assets/audio/MagicalConnection.mp3",
            audioCover: "/assets/audioCovers/MagicalConnection.png"
        },
        {
            songName: "Common Ground",
            songArtist: "Peak Twilight",
            audioSrc: "/assets/audio/CommonGround.mp3",
            audioCover: "/assets/audioCovers/CommonGround.png"
        },
        {
            songName: "Tourist",
            songArtist: "Rj Pasin",
            audioSrc: "/assets/audio/Tourist.mp3",
            audioCover: "/assets/audioCovers/Tourist.png"
        },
        {
            songName: "Departure",
            songArtist: "Peak Twilight & S N U G",
            audioSrc: "/assets/audio/Departure.mp3",
            audioCover: "/assets/audioCovers/Departure.png"
        },
        {
            songName: "Desolation",
            songArtist: "Peak Twilight & mell-ø",
            audioSrc: "/assets/audio/Desolation.mp3",
            audioCover: "/assets/audioCovers/Desolation.png"
        },
        {
            songName: "Lunar Shores",
            songArtist: "Peak Twilight & no one's perfect",
            audioSrc: "/assets/audio/LunarShores.mp3",
            audioCover: "/assets/audioCovers/LunarShores.png"
        }
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(songs[0].audioSrc));
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
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

    const handleSliderChangeStart = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }
    };

    const handleSliderChangeEnd = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const handlePreviousSong = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
    };

    const toggleMinimize = () => {
        setIsMinimized((prev) => !prev);
    };

    return (
        <>
            <Box height="100vh" overflow="hidden" position="relative" width={isMinimized ? "0%" : "100%"}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Card
                        height="98%"
                        width={(isSmallerThan770px || isShorterThan400px) ? "98%" : "80%"}
                        borderRadius="xl"
                        padding={5}
                        border="2px solid transparent"
                        backgroundColor="rgba(255, 255, 255, 0.3)"
                        backgroundImage="radial-gradient(circle at top left, silver)"
                        backgroundOrigin="border-box"
                        backgroundClip="border-box"
                        boxShadow="0 2px 3px rgba(0, 0, 0, 0.1), inset 0 0 6px rgba(255, 255, 255, 0.2)"
                        backdropFilter="blur(2px)"
                        overflow="hidden"
                        position="relative" // Add relative positioning to the Card
                    >
                        <IconButton
                            boxSize={9}
                            fontSize={"lg"}
                            icon={<FaCompress />} // Minimize icon
                            size="sm"
                            position="absolute" // Absolute positioning
                            top={2}
                            right={2}
                            onClick={toggleMinimize}
                            zIndex={"docked"} // Ensure the button is on top
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            color="white"
                            borderRadius="lg"
                            boxShadow="md"
                            p={2}
                            sx={{ 
                                cursor: "pointer",
                                transition: "0.2s ease-in-out",
                                _hover: {
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                    transition: "0.2s ease-in-out"
                                }
                            }}
                        />
                        <Box display="flex" flexDirection="column" height="100%" width="100%">
                            <Heading textAlign="center" mt={-2} mb={3} color="white" fontFamily="cursive">
                                Prakhar's Gallery
                            </Heading>
                            <Box display="flex" height={isSmallerThan430px ? "30%" : "50%"} width="100%" marginBottom={3} minHeight="200px" gap={3}>
                                <Box
                                    width={(isSmallerThan695px || isShorterThan400px) ? "100%" : "70%"}
                                    height="100%"
                                    flexGrow={1}
                                    mr={isSmallerThan695px ? -2.5 : 0}
                                >
                                    <ImagesSection width="100%" height="100%" />
                                </Box>
                                <Box width={isSmallerThan695px ? "0%" : "30%"} minW={!isSmallerThan695px ? "196px" : "none"} height="100%">
                                    <MiniPlayer
                                        songs={songs}
                                        currentSongIndex={currentSongIndex}
                                        isPlaying={isPlaying}
                                        audioRef={audioRef}
                                        progress={progress}
                                        togglePlayPause={togglePlayPause}
                                        handleSliderChange={handleSliderChange}
                                        handleSliderChangeStart={handleSliderChangeStart}
                                        handleSliderChangeEnd={handleSliderChangeEnd}
                                        handleNextSong={handleNextSong}
                                        handlePreviousSong={handlePreviousSong}
                                        setProgress={setProgress}
                                    />
                                </Box>
                            </Box>

                            <Box height="30%" width="100%" flexGrow={1}>
                                <NotesSection />
                            </Box>
                        </Box>
                    </Card>
                </Box>

                {(isSmallerThan695px || isMinimized) && (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="fixed"
                        bottom={0}
                        width="100%"
                        backgroundColor="rgba(255, 255, 255, 0.9)"
                    >
                        <CollapsedPlayer
                            image={songs[currentSongIndex].audioCover}
                            songName={songs[currentSongIndex].songName}
                            isPlaying={isPlaying}
                            handlePreviousSong={handlePreviousSong}
                            togglePlayPause={togglePlayPause}
                            handleNextSong={handleNextSong}
                        />
                    </Box>
                )}
            </Box>
            {isMinimized && (
                <IconButton
                    boxSize={9}
                    fontSize={"lg"}
                    icon={<FaExpand />}
                    size="sm"
                    position="absolute"
                    top={2}
                    right={2}
                    onClick={toggleMinimize}
                    zIndex={"docked"}
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    color="white"
                    borderRadius="lg"
                    boxShadow="md"
                    p={2}
                    sx={{ 
                        cursor: "pointer",
                        transition: "0.2s ease-in-out",
                        _hover: {
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            transition: "0.2s ease-in-out"
                        }
                    }}
                />
            )}
        </>
    );
}

export default MainCard;