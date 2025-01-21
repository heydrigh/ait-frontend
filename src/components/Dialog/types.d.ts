import { ReactNode } from 'react'

export interface DialogProps {
	isOpen: boolean
	title: string
	onConfirm: VoidFunction
	onCancel: VoidFunction
	confirmText?: string
	cancelText?: string
	children: ReactNode
}
