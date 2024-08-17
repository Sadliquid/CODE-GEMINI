import { Card, Text } from "@chakra-ui/react"

function MiniPlayer() {
    return (
        <Card display="flex" justifyContent="center" alignItems="center" borderRadius={"2xl"} width="100%" height="100%" padding={0}>
            <Text textAlign="center" width="100%">Mini Player</Text>
        </Card>
    );
}

export default MiniPlayer