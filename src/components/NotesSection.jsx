import { Box, useBreakpointValue } from "@chakra-ui/react"
import NoteCard from "./NoteCard"
import ClassNotes from "../../ClassNotes.json"

function NotesSection() {

    const cardWidth = useBreakpointValue({
        base: "100%",
        sm: "45%",
        md: "25%",
        lg: "20%",
    });

    return (
        <Box
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            gap={2}
            height="100%"
            padding={4}
            overflowY="scroll"
            overflowX="hidden"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '10px'
                },
                '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                    borderRadius: "24px"
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 #f1f1f1',
            }}
        >
            {Object.keys(ClassNotes).map((person) => (
                <Box key={person} width={cardWidth}>
                    <NoteCard name={person} text={ClassNotes[person]["message"]} images={ClassNotes[person]["images"]} videos={ClassNotes[person]["videos"]} isTopFour={ClassNotes[person]["isTopFour"]}/>
                </Box>
            ))}
        </Box>
    )
}

export default NotesSection