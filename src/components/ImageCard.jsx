/* eslint-disable react/prop-types */

import { Card, Image } from "@chakra-ui/react";

function ImageCard({ src }) {
    return (
        <Card
            bg="white"
            p={0}
            boxShadow="md"
            w="full"
            h="full"
            overflow="hidden"
        >
            <Image 
                src={src}
                alt="Image"
                objectFit="cover"
                width="100%"     
                height="100%"
                sx={{
                    userSelect: "none",
                }}
            />
        </Card>
    );
}

export default ImageCard;