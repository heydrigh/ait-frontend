import Link from 'next/link'
import { NavItemProps } from './types'

const NavItem = ({ href, icon: Icon, label, onClick, active }: NavItemProps) => {
	return (
		<Link
			href={href}
			className={`flex items-center px-4 py-2 rounded-md ${
				active ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
			}`}
			onClick={onClick}
		>
			<Icon className='mr-3 text-lg' />
			{label}
		</Link>
	)
}

export default NavItem
