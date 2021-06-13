import { Box, Drawer, useBreakpointValue,DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useSidebarDrawer } from '../../context/SideBarDrawerContext'
import SidebarNav from './SidebarNav'


export default function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer()
    const isDraweSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if(isDraweSideBar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4"> 
                        <DrawerCloseButton mt='6'/>
                        <DrawerHeader>Navegation</DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as='aside' w='64' mr='8'>
           <SidebarNav />
        </Box>
    )
}
