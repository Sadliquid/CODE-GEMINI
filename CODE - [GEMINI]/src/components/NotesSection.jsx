import { SimpleGrid } from "@chakra-ui/react"
import NoteCard from "./NoteCard"

function NotesSection() {
    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <NoteCard bg='tomato' height='80px'></NoteCard>
            <NoteCard bg='tomato' height='80px'></NoteCard>
            <NoteCard bg='tomato' height='80px'></NoteCard>
            <NoteCard bg='tomato' height='80px'></NoteCard>
            <NoteCard bg='tomato' height='80px'></NoteCard>
        </SimpleGrid>
    )
}

export default NotesSection