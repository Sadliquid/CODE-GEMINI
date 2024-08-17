import { Box } from "@chakra-ui/react"
import NoteCard from "./NoteCard"

function NotesSection() {
    const notes = [
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`
    ]
    return (
        <Box 
            display="flex" 
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%" 
            height="100%" 
            padding={5}
            background={"none"}
        >
            {notes.map((note, index) => (
                <NoteCard key={index} text={note} />
            ))}
        </Box>
    )
}

export default NotesSection