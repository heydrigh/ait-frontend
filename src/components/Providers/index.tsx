'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			{children}
		</QueryClientProvider>
	)
}
