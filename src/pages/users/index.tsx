import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { RiPencilLine, RiUserLine } from 'react-icons/ri'
import { Header } from '../../components/Header/Header'
import Pagination from '../../components/Pagination/Pagination'
import Sidebar from '../../components/SideBar/Sidebar'

export default function UserList() {
    return (
        <Box>
            <Header />
                <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                    <Sidebar />
                    <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                        <Flex mb='8' justify='space-between' align='center'>
                            <Heading size='lg' fontWeight='normal'>Users</Heading>
                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiUserLine} fontSize='20'/>}>
                                Create new User 
                            </Button>
                        </Flex>

                        <Table colorScheme='whiteAlpha'>
                            <Thead>
                                <Tr>
                                    <Th px='6' color='gray.300' w='8'>
                                        <Checkbox colorScheme='pink'/>
                                    </Th>
                                    <Th>
                                        User
                                    </Th>
                                    <Th>
                                        Registration Date
                                    </Th>
                                    <Th w='8'>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px='6'>
                                        <Checkbox colorScheme='pink'/>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight='Bold'>Raphael Mesquita</Text>
                                            <Text fontSize='small' color='gray.300'>raphaelbmesquita@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        04 April 2021
                                    </Td>
                                    <Td>
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/> }>
                                            EDIT
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Pagination />
                    </Box>
                </Flex>
        </Box>
    )
}
