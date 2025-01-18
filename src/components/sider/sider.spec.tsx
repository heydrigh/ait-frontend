import { render, screen, fireEvent } from '@testing-library/react'
import Sider from './'
import { usePathname } from 'next/navigation'

jest.mock('../NavItem', () => ({
	__esModule: true,
	default: () => <div data-testid='nav-item-link'></div>,
}))

describe('Sider', () => {
	const navItems = [
		{ label: 'Dashboard', href: '/', icon: jest.fn() },
		{ label: 'Farmers', href: '/farmers', icon: jest.fn() },
	]

	beforeEach(() => {
		;(usePathname as jest.Mock).mockReturnValue('/')
	})

	it('should toggle the sidebar when the toggle button is clicked', () => {
		render(<Sider navItems={navItems} />)

		const toggleButton = screen.getByRole('button', { name: 'Toggle Menu' })

		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')

		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('translate-x-0')

		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')
	})

	it('should close the sidebar when the backdrop is clicked', () => {
		render(<Sider navItems={navItems} />)

		const toggleButton = screen.getByRole('button', { name: 'Toggle Menu' })

		fireEvent.click(toggleButton)
		expect(screen.getByRole('complementary')).toHaveClass('translate-x-0')

		const backdrop = screen.getByTestId('overlay')
		fireEvent.click(backdrop)
		expect(screen.getByRole('complementary')).toHaveClass('-translate-x-full')
	})
})
