// This is the card component for every note.
import { Text, Card } from "@chakra-ui/react";

function NoteCard() {
    return (
        <Card
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            maxW="sm"
            mx="auto"
            mt={4}
        >
            <Text fontSize="xl">Note Title</Text>
            <Text fontSize="md">Note Description</Text>
        </Card>
    )
}

export default NoteCard