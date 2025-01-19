'use client'

import { useRef } from 'react'
import { IMaskInput } from 'react-imask'
import { MaskedInputProps } from './types'
import { InputMask } from 'imask'

const MaskedInput = ({ name, label, error, onAccept, onChange, ...rest }: MaskedInputProps) => {
	const maskRef = useRef<InputMask | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleAccept = (value: string, mask: InputMask) => {
		if (onAccept) onAccept(value, mask)
		if (onChange) {
			onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>)
		}
	}

	return (
		<div className='mb-4'>
			{label && (
				<label
					htmlFor={name}
					className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block'
				>
					{label}
				</label>
			)}

			<IMaskInput
				id={name}
				inputRef={inputRef}
				ref={maskRef}
				onAccept={handleAccept}
				className={`block w-full px-3 py-2 border rounded-md focus:outline-none ${
					error
						? 'border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
				} transition-all duration-150`}
				{...rest}
			/>

			{error && (
				<p className='text-sm text-red-500' role='alert'>
					{error}
				</p>
			)}
		</div>
	)
}

export default MaskedInput
