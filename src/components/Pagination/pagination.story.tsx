import type { Meta, StoryObj } from '@storybook/react'
import Pagination from './'

const meta: Meta<typeof Pagination> = {
	component: Pagination,
	title: 'Components/Pagination',
	argTypes: {
		currentPage: {
			control: 'number',
			description: 'The current page number.',
		},
		totalPages: {
			control: 'number',
			description: 'The total number of pages.',
		},
		onPageChange: {
			action: 'page changed',
			description: 'Callback function for page changes.',
		},
	},
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
	args: {
		currentPage: 1,
		totalPages: 10,
	},
}

export const MiddlePage: Story = {
	args: {
		currentPage: 5,
		totalPages: 10,
	},
}

export const LastPage: Story = {
	args: {
		currentPage: 10,
		totalPages: 10,
	},
}
