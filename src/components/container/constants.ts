import { FiHome } from 'react-icons/fi'
import { NavItem } from '../sider/types'
import { FaListUl } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'

export const navItems: NavItem[] = [
	{ label: 'Dashboard', href: '/', icon: FiHome },
	{ label: 'Listar AITs', href: '/aits', icon: FaListUl },
	{ label: 'Novo AIT', href: '/aits', icon: MdCreateNewFolder },
]
