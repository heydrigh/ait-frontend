import type { Meta, StoryObj } from '@storybook/react'
import DateTimePicker from './'

const meta: Meta<typeof DateTimePicker> = {
	component: DateTimePicker,
	title: 'Components/DateTimePicker',
	argTypes: {
		value: { control: 'text', defaultValue: '25/01/2025 14:30' },
		label: { control: 'text', defaultValue: 'Event Date' },
		errorMessage: { control: 'text', defaultValue: '' },
		onChange: { action: 'changed' },
	},
}

export default meta

type Story = StoryObj<typeof DateTimePicker>

export const Default: Story = {}

export const WithError: Story = {
	args: {
		errorMessage: 'This field is required.',
	},
}
