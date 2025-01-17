import type { Meta, StoryObj } from '@storybook/react'
import Sider from './'
import { FaHome, FaUser } from 'react-icons/fa'
import { SiderProps } from './types'

const meta: Meta<typeof Sider> = {
	component: Sider,
	title: 'Components/Sider',
	decorators: [
		(Story) => (
			<div className='w-[320px] h-screen '>
				<Story />
			</div>
		),
	],
	argTypes: {
		navItems: {
			description: 'List of navigation items to be displayed in the sidebar',
			control: false,
		},
	},
}

export default meta

type Story = StoryObj<SiderProps>

export const Default: Story = {
	args: {
		navItems: [
			{ label: 'Home', href: '/home', icon: FaHome },
			{ label: 'Profile', href: '/profile', icon: FaUser },
		],
	},
}
