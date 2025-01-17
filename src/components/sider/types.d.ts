import { IconType } from 'react-icons'

export interface NavItem {
	label: string
	href: string
	icon: IconType
}

export interface SiderProps {
	navItems: NavItem[]
}
