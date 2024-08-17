// This section is the top right of the homepage, which is a placeholder for now, until we find a good use for it

import { Card, Text } from "@chakra-ui/react"

function PlaceholderSection() {
    return (
        <Card display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" padding={0}>
            <Text textAlign="center" width="100%">Placeholder section</Text>
        </Card>
    );
}

export default PlaceholderSection