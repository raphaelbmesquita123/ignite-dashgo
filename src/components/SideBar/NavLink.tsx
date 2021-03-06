import Icon from "@chakra-ui/icon";
import { Link as ChakraLink, LinkProps, Text } from "@chakra-ui/layout";
import { ElementType } from "react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps{
    icon: ElementType
    children: string
    href: string
}

export default function NavLink({ icon, children, href,...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' align='center' {...rest}>
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium' >{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}
