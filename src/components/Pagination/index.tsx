import { Box, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import PaginationItem from './PaginationItem'

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray (from: number , to: number){
    return [...new Array(to - from)]
    .map((_, index) => {
        return from + index + 1
    })
    .filter(page => page > 0)
}

export default function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
}: PaginationProps) {

    const lasPage = Math.floor(totalCountOfRegisters / registersPerPage)

    const previousPage = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lasPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lasPage))
    : []

    return (
       <Stack 
       direction={['column','row']}
       mt='8'
       justify='space-between'
       align='center'
       spacing='6'>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1}  onPageChange={onPageChange}/>
                        { currentPage > ( 2 + siblingsCount ) && <Text
                        color='gray.300' textAlign='center' width='6'>...</Text> }
                    </>
                )}

                {previousPage.length > 0 && previousPage.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}
                <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange}/>
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}

                {currentPage + siblingsCount < lasPage && (
                    <>
                        { (currentPage + 1 + siblingsCount) < lasPage && <Text
                        color='gray.300' textAlign='center' width='6'>...</Text> }
                        <PaginationItem number={lasPage} onPageChange={onPageChange} />
                    </>
                )}
            </Stack>

       </Stack>
    )
}
