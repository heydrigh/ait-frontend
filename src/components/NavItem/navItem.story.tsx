import type { Meta, StoryObj } from '@storybook/react'
import NavItem from './'
import { FaHome } from 'react-icons/fa'
import { NavItemProps } from './types'

const meta: Meta<typeof NavItem> = {
	component: NavItem,
	title: 'Components/NavItem',
	decorators: [
		(Story) => (
			<div className='w-[150px] '>
				<Story />
			</div>
		),
	],
	argTypes: {
		href: { control: 'text', description: 'Navigation link URL' },
		label: { control: 'text', description: 'Label text for the navigation item' },
		active: { control: 'boolean', description: 'Whether the item is active or not' },
		onClick: { action: 'clicked', description: 'Click handler for the navigation item' },
		icon: { control: false, description: 'Icon component for the navigation item' },
	},
}

export default meta

type Story = StoryObj<NavItemProps>

export const Default: Story = {
	args: {
		href: '/home',
		label: 'Home',
		icon: FaHome,
		active: false,
	},
}

export const Active: Story = {
	args: {
		href: '/home',
		label: 'Home',
		icon: FaHome,
		active: true,
	},
}

export const WithClickAction: Story = {
	args: {
		href: '/action',
		label: 'Click Me',
		icon: FaHome,
		active: false,
	},
}
