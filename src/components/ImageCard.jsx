/* eslint-disable react/prop-types */
import { Card, Image } from "@chakra-ui/react";

function ImageCard({ src }) {
    return (
        <Card
            bg="white"
            p={0}
            borderRadius="md 0 0 md"
            boxShadow="md"
            w="full"
            h="full"
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