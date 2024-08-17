import { Box } from "@chakra-ui/react"
import NoteCard from "./NoteCard"

function NotesSection() {
    const notes = { 
"Qi Fang":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
"lalalala":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
"liololololo":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
"lelelelele":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
"lululullu":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
"lilillii":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead !
`,
    }
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={2}
            height="100%"
            overflow="auto"
            padding={4}
            sx={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none'
            }}
        >
            {Object.keys(notes).map((name) => (
                <NoteCard key={name} name={name} text={notes[name]} />
            ))}
        </Box>
    )
}

export default NotesSection