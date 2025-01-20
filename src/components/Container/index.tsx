'use client'
import { PropsWithChildren } from 'react'
import { navItems } from './constants'
import Sider from '../sider'

const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex h-screen'>
			<Sider navItems={navItems} />
			<main className='flex-1 bg-slate-100 p-4 overflow-y-auto'>{children}</main>
		</div>
	)
}

export default Container
