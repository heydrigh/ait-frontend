import type { Meta, StoryObj } from '@storybook/react'
import Dialog from './'

const meta: Meta<typeof Dialog> = {
	component: Dialog,
	title: 'Components/Dialog',
	argTypes: {
		isOpen: { control: 'boolean', defaultValue: true },
		title: { control: 'text', defaultValue: 'Sample Dialog' },
		confirmText: { control: 'text', defaultValue: 'Confirm' },
		cancelText: { control: 'text', defaultValue: 'Cancel' },
		onConfirm: { action: 'confirmed' },
		onCancel: { action: 'canceled' },
	},
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
	args: {
		isOpen: true,
		title: 'Are you sure?',
		children: 'This action is irreversible.',
	},
}
