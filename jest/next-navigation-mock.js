/* eslint-disable */

jest.mock('next/navigation', () => ({
	...require('next-router-mock'),
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
	}),
	usePathname: jest.fn(),
}))
