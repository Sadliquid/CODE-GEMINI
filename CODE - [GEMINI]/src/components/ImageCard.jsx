import { Card } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function ImageCard({ src }) {
    return (
        <Card
            bg="white"
            p={0}
            borderRadius="md"
            boxShadow="md"
            mx="auto"
            maxW="250px"
            maxH="250px"
            w={"250px"}
            h={"250px"}
            overflow="hidden"
        >
            <Image 
                src={src}
                alt="Placeholder"
                objectFit="cover"
                width="100%"     
                height="100%"
            />
        </Card>
    );
}

export default ImageCard;