import { Box, useBreakpointValue } from "@chakra-ui/react"
import NoteCard from "./NoteCard"

function NotesSection() {
    const notes = { 
"Qi Fang":
`Heyyy What's up prakhar,
Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead ! Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

Thank you for being the most awesome class rep always helping to convey message around despite being so busy at times. It was great to work with you for Ecoms 1,definitely had fun in the process and filming for TicTap video 💯 

All the best for your adventures up ahead ! Nooooo ur leaving earlier and not ending the year 2 together with us ._. No more best class rep around to help us answer teacher queries 🫢🫢

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

    const cardWidth = useBreakpointValue({
        base: "100%",  // For very small screens
        sm: "45%",    // For small screens
        md: "25%", // For medium screens
        lg: "20%",    // For large screens
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
            {Object.keys(notes).map((name) => (
                <Box key={name} width={cardWidth}>
                    <NoteCard name={name} text={notes[name]} />
                </Box>
            ))}
        </Box>
    )
}

export default NotesSection