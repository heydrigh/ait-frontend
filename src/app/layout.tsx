import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import Container from '@/components/Container'
import { Providers } from '@/components/Providers'

const fontRoboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'AITS Dashboard',
	description: 'AITS dashboard',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${fontRoboto}  antialiased`}>
				<Providers>
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	)
}
