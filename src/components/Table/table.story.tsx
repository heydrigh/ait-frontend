import type { Meta, StoryObj } from '@storybook/react'
import Table from './'
import { generateMockAits, mockColumns } from './mocks'

const meta: Meta<typeof Table> = {
	component: Table,
	title: 'Components/Table',
	argTypes: {
		onView: { action: 'view', description: 'Handler for viewing an item' },
		onEdit: { action: 'edit', description: 'Handler for editing an item' },
		onDelete: { action: 'delete', description: 'Handler for deleting an item' },
	},
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
	args: {
		data: generateMockAits(15),
		columns: mockColumns,
	},
}
