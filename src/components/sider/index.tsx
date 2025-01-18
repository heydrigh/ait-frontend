'use client'

import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { SiderProps } from './types'
import NavItem from '../NavItem'
import { useState } from 'react'

const Sider = ({ navItems }: SiderProps) => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	const handleToggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	const handleCloseSidebar = () => {
		setIsOpen(false)
	}

	return (
		<>
			<div className='flex flex-col h-screen bg-slate-600 text-white md:hidden'>
				<div className='flex justify-end items-center h-16 px-4'>
					<h1 className='hidden md:block text-xl font-bold'>AIT&apos;S DASHBOARD</h1>
					<button onClick={handleToggleSidebar} aria-label='Toggle Menu'>
						<FaBars className='text-2xl' />
					</button>
				</div>
			</div>

			{isOpen && (
				<div
					className='fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden'
					onClick={handleCloseSidebar}
					data-testid='overlay'
				/>
			)}

			<aside
				className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-600 text-white transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform md:relative md:translate-x-0`}
			>
				<div className='flex items-center justify-between h-16 px-4 bg-slate-900 md:justify-center'>
					<h1 className='text-xl font-bold'>AIT&apos;S DASHBOARD</h1>
					<button
						onClick={handleCloseSidebar}
						className='text-2xl md:hidden'
						aria-label='Close Menu'
					>
						<IoMdClose />
					</button>
				</div>

				<nav className='flex-1 overflow-y-auto'>
					<ul className='mt-4 space-y-2'>
						{navItems.map((item) => (
							<li key={item.href}>
								<NavItem
									href={item.href}
									icon={item.icon}
									label={item.label}
									onClick={handleCloseSidebar}
									active={pathname === item.href}
								/>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</>
	)
}

export default Sider
