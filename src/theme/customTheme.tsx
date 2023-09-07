import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    components: {
        Table: {
            variants: {
                simple: {
                    th: {
                        borderColor: "#454545"
                    },
                    td: {
                        borderColor: "#454545"
                    }
                }
            }
        },
    }
})

export default customTheme;