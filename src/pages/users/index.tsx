import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from '@chakra-ui/react'
import { RiPencilLine, RiUserLine } from 'react-icons/ri'
import { Header } from '../../components/Header/index'
import Pagination from '../../components/Pagination/index'
import Sidebar from '../../components/SideBar/index'
import NextLink from 'next/link'
import { getUsers, useUsers } from '../../services/hooks/useUsers'
import { useState } from 'react'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'
import { GetServerSideProps } from 'next'



export default function UserList({ users }) {
    const [page, setPage] = useState(1)
    const {data, isLoading, error, isFetching } = useUsers(page, {
        initialData: users,
    })
    

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true
    })

    async function handlePrefethUser(userId: string){
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10 // 10min
        })
    }

    return (
        <Box>
            <Header />
                <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                    <Sidebar />
                    <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                        <Flex mb='8' justify='space-between' align='center'>
                            <Heading size='lg' fontWeight='normal'>
                                Users
                                { !isLoading && isFetching && <Spinner siza='sm' color='gray.500' ml='4'/>}
                            </Heading>
                            <NextLink href='/users/create' passHref>
                                <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiUserLine} fontSize='20'/>}>
                                    Create new User 
                                </Button>
                            </NextLink>
                        </Flex>

                        { isLoading ? (
                            <Flex justify='center'>
                                <Spinner />
                            </Flex>   
                        ) : error ? (
                            <Flex justify='center'>Error</Flex>
                        ) : (
                            <>
                                <Table colorScheme='whiteAlpha'>
                                    <Thead>
                                        <Tr>
                                            <Th px={['4','4','6']} color='gray.300' w='8'>
                                                <Checkbox colorScheme='pink'/>
                                            </Th>
                                            <Th>
                                                User
                                            </Th>
                                            {isWideVersion && <Th> Registration Date </Th>}
                                            <Th w='8'>
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.users.map( user => {
                                            return(
                                                <Tr key={user.id}>
                                                    <Td px={['4','4','6']}>
                                                        <Checkbox colorScheme='pink'/>
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link color='purple.400' onMouseEnter={() => handlePrefethUser( user.id )}>
                                                                <Text fontWeight='Bold'>{user.name}</Text>
                                                            </Link>
                                                            <Text fontSize='small' color='gray.300'>{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && <Td>{user.createdAt} </Td> }
                                                    <Td>
                                                        {
                                                            isWideVersion &&
                                                            <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16'/> }>
                                                                EDIT
                                                            </Button>
                                                        }
                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                                <Pagination 
                                    totalCountOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )}
               


                    </Box>
                </Flex>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { users, totalCount } = await getUsers(1)

    return {
        props:{
            users,
        }
    }
}