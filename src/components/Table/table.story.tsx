import type { Meta, StoryObj } from '@storybook/react'
import Table from './'
import { generateMockAits, mockColumns, mockActions } from './mocks'
import { Ait } from '@/generated'

const meta: Meta<typeof Table<Ait>> = {
	component: Table,
	title: 'Components/Table',
	argTypes: {
		actions: {
			description: 'Actions available for each row',
		},
	},
}

export default meta

type Story = StoryObj<typeof Table<Ait>>

export const Default: Story = {
	args: {
		data: generateMockAits(10),
		columns: mockColumns,
		actions: mockActions,
	},
}
