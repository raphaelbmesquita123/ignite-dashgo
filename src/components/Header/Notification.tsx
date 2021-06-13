import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export default function Notification() {
    return (
        <HStack
            spacing={["6","8"]}
            mx={["6","8"]}
            pr={["6","8"]}
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
            >
            <Icon as={RiNotificationLine} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
    )
}
