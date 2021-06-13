import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

interface ProfileProps{
    showProfileData?: boolean
}

export default function Profile({showProfileData = true}: ProfileProps) {

    return (
        <Flex
        align='center'
        >
            { 
            showProfileData? 
            <Box mr='4'textAlign='right'>
                <Text>Raphael Mesquita</Text>

                <Text 
                color="gray.300" 
                fontSize='small'
                >
                    raphaelbmesquita@gmail.com
                </Text>
            </Box>
            :
            ''}


            <Avatar size='md' name='Raphael Mesquita'/>

        </Flex>
    )
}
