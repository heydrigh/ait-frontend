import { ButtonHTMLAttributes } from 'react'
export type ButtonVariant = 'primary' | 'danger' | 'outlined'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	loading?: boolean
}
