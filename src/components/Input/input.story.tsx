import type { Meta, StoryObj } from '@storybook/react'
import Input from './'
import { InputProps } from './types'

const meta: Meta<typeof Input> = {
	component: Input,
	title: 'Components/Input',
	argTypes: {
		label: { control: 'text', description: 'Label for the input field' },
		error: { control: 'text', description: 'Error message for validation' },
		type: {
			control: 'text',
			description: 'Type of the input field',
			defaultValue: 'text',
		},
		placeholder: { control: 'text', description: 'Placeholder text' },
		disabled: { control: 'boolean', description: 'Disable the input field' },
	},
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {
	args: {
		label: 'Username',
		placeholder: 'Enter your username',
	},
}

export const WithError: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		error: 'Invalid email address',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Password',
		placeholder: 'Enter your password',
		disabled: true,
	},
}
