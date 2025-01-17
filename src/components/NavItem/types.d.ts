import { IconType } from 'react-icons'

export interface NavItemProps {
	href: string
	icon: IconType
	label: string
	onClick?: VoidFunction
	active: boolean
}
