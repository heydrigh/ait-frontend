import Loader from '../Loader'
import { ButtonProps, ButtonVariant } from './types'

const Button = ({ variant = 'primary', children, loading, disabled, ...rest }: ButtonProps) => {
	const buttonVariantClasses: Record<ButtonVariant, string> = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
		danger: 'bg-red-500 text-white hover:bg-red-600',
		outlined: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
	}

	return (
		<button
			className={`px-4 h-8 py-2 rounded-md font-medium transition-all duration-150 focus:outline-none disabled:cursor-not-allowed
        ${buttonVariantClasses[variant]}`}
			disabled={loading || disabled}
			{...rest}
		>
			{loading ? <Loader /> : children}
		</button>
	)
}

export default Button
