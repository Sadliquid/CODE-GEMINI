import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'Sora'
            },
            variants: {
                link: {
                    color: 'blue',
                    textDecoration: 'underline'
                }
            }
        }
    }
})

export default Theme;