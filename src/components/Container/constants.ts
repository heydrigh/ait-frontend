import { NavItem } from '../sider/types'
import { FaListUl } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'

export const navItems: NavItem[] = [
	{ label: 'Listar AITs', href: '/', icon: FaListUl },
	{ label: 'Novo AIT', href: '/ait/new', icon: MdCreateNewFolder },
]
