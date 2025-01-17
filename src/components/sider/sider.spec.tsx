import { render, screen, fireEvent } from '@testing-library/react'
import Sider from './'
import { usePathname } from 'next/navigation'

jest.mock('../NavItem', () => ({
	__esModule: true,
	default: ({ href, label, active }: any) => (
		<div data-testid='nav-item-link' data-active={active} data-href={href}>
			{label}
		</div>
	),
}))

describe('Sider', () => {
	const navItems = [
		{ label: 'Dashboard', href: '/', icon: jest.fn() },
		{ label: 'Farmers', href: '/farmers', icon: jest.fn() },
	]

	beforeEach(() => {
		;(usePathname as jest.Mock).mockReturnValue('/')
	})

	it('should render correctly with all nav items', () => {
		render(<Sider navItems={navItems} />)

		expect(screen.getAllByTestId('nav-item-link')).toHaveLength(navItems.length)
		navItems.forEach((item) => {
			expect(screen.getByText(item.label)).toBeInTheDocument()
		})
	})

	it('should toggle the sidebar when the toggle button is clicked', () => {
		render(<Sider navItems={navItems} />)

		const toggleButton = screen.getByRole('button', { name: 'Toggle Menu' })

		// Sidebar is initially closed
		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')

		// Open the sidebar
		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('translate-x-0')

		// Close the sidebar
		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')
	})

	it('should close the sidebar when the backdrop is clicked', () => {
		render(<Sider navItems={navItems} />)

		const toggleButton = screen.getByRole('button', { name: 'Toggle Menu' })

		// Open the sidebar
		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('translate-x-0')

		// Close the sidebar by clicking on the backdrop
		const backdrop = screen.getByTestId('overlay')
		fireEvent.click(backdrop)
		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')
	})

	it('should highlight the active navigation item based on the pathname', () => {
		render(<Sider navItems={navItems} />)

		const activeNavItem = screen.getByText('Dashboard')
		expect(activeNavItem).toHaveAttribute('data-active', 'true')
	})
})
