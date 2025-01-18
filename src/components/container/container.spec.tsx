import { render, screen } from '@testing-library/react'
import Container from './'

jest.mock('../sider', () => () => <nav data-testid='sider' />)

describe('Container', () => {
	it('should render the Sider component', () => {
		render(
			<Container>
				<div>Test Content</div>
			</Container>
		)

		expect(screen.getByTestId('sider')).toBeInTheDocument()
	})

	it('should render children inside the main content area', () => {
		render(
			<Container>
				<div>Test Content</div>
			</Container>
		)

		expect(screen.getByText('Test Content')).toBeInTheDocument()
	})

	it('should apply correct layout classes', () => {
		const { container } = render(
			<Container>
				<div>Test Content</div>
			</Container>
		)

		expect(container.firstChild).toHaveClass('flex h-screen')

		const main = container.querySelector('main')
		expect(main).toHaveClass('flex-1 bg-slate-100 p-4 overflow-y-auto')
	})
})
