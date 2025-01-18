import type { Meta, StoryObj } from '@storybook/react'
import Container from '.'

const meta: Meta<typeof Container> = {
	component: Container,
	title: 'Components/Container',
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
	args: {
		children: <div>Content goes here</div>,
	},
}
