import type { Meta, StoryObj } from '@storybook/react'
import MaskedInput from './'
import { MaskedInputProps } from './types'

const meta: Meta<typeof MaskedInput> = {
	component: MaskedInput,
	title: 'Components/MaskedInput',
	argTypes: {
		label: { control: 'text', description: 'Label for the input field' },
		name: { control: 'text', description: 'Name of the input field' },
		error: { control: 'text', description: 'Error message for validation' },
		placeholder: { control: 'text', description: 'Placeholder text' },
		mask: {
			control: 'text',
			description: 'Mask pattern for the input (e.g., phone number, date)',
		},
		onAccept: { action: 'accepted', description: 'Callback triggered on input accept' },
		onChange: { action: 'changed', description: 'Callback triggered on input change' },
	},
}

export default meta

type Story = StoryObj<MaskedInputProps>

export const Default: Story = {
	args: {
		label: 'Phone Number',
		name: 'phone',
		placeholder: 'Enter your phone number',
		mask: '(00) 00000-0000',
	},
}

export const WithError: Story = {
	args: {
		label: 'Phone Number',
		name: 'phone',
		placeholder: 'Enter your phone number',
		mask: '(00) 00000-0000',
		error: 'Invalid phone number',
	},
}

export const DateInput: Story = {
	args: {
		label: 'Date of Birth',
		name: 'dob',
		placeholder: 'DD/MM/YYYY',
		mask: '00/00/0000',
	},
}
