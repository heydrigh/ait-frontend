import type { Meta, StoryObj } from '@storybook/react'
import TextArea from './'
import { TextAreaProps } from './types'

const meta: Meta<typeof TextArea> = {
	component: TextArea,
	title: 'Components/TextArea',
	argTypes: {
		label: { control: 'text', description: 'Label for the TextArea' },
		placeholder: { control: 'text', description: 'Placeholder text' },
		error: { control: 'text', description: 'Error message to display' },
		disabled: { control: 'boolean', description: 'Disables the TextArea' },
		rows: { control: 'number', description: 'Number of rows in the TextArea' },
	},
}

export default meta

type Story = StoryObj<TextAreaProps>

export const Default: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter your description here...',
	},
}

export const WithError: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter your description here...',
		error: 'Description is required.',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter your description here...',
		disabled: true,
	},
}

export const CustomRows: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter your description here...',
		rows: 5,
	},
}
