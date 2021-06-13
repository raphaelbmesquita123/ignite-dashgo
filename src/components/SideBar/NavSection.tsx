import { Box, Stack, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";


interface NavSectionProps {
    title: string
    children: ReactNode
}

export default function NavSection({ title, children }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeight='bold' color='gray.400' fontSize='Small'>{title}</Text>
            <Stack spacing='4' mt='8' align='stretch'>
                {children}
            </Stack>
        </Box>
    )
}
