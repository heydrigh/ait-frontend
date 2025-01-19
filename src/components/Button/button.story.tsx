import type { Meta, StoryObj } from '@storybook/react'
import Button from './'
import { ButtonProps } from './types'

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Button',
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['primary', 'danger', 'outlined'],
			description: 'Defines the button style variant',
		},
		children: { control: 'text', description: 'Button text or content' },
		loading: { control: 'boolean', description: 'Shows a loader inside the button when true' },
		disabled: { control: 'boolean', description: 'Disables the button' },
		onClick: { action: 'clicked', description: 'Click handler for the button' },
	},
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Primary Button',
		loading: false,
	},
}

export const Danger: Story = {
	args: {
		variant: 'danger',
		children: 'Danger Button',
		loading: false,
	},
}

export const Outlined: Story = {
	args: {
		variant: 'outlined',
		children: 'Outlined Button',
		loading: false,
	},
}

export const Loading: Story = {
	args: {
		variant: 'primary',
		children: 'Loading...',
		loading: true,
	},
}

export const Disabled: Story = {
	args: {
		variant: 'primary',
		children: 'Disabled Button',
		disabled: true,
		loading: false,
	},
}
