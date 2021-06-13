import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

export default function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title="Geral" >
                <NavLink icon={RiDashboardLine} href="/dashboard">
                    Bashboard
                </NavLink>
                <NavLink icon={RiContactsLine} href="/users">
                    Users
                </NavLink>
            </NavSection>
            <NavSection title="Automation">
                <NavLink icon={RiInputMethodLine} href="/forms">
                    Forms
                </NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">
                Automation
                </NavLink>
            </NavSection>
        </Stack>
    )
}
