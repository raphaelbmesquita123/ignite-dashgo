import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

type SidebarDrawerContextData = UseDisclosureReturn

interface SidebarDrawerProviderProps {
    children: ReactNode
}

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return(
        <SidebarDrawerContext.Provider
        value={
            disclosure
        }>
            {children}

        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)