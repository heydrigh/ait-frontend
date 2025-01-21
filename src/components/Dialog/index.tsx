'use client'

import { DialogProps } from './types'

const Dialog = ({
	isOpen,
	title,
	onConfirm,
	onCancel,
	confirmText = 'Confirma',
	cancelText = 'Cancela',
	children,
}: DialogProps) => {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white rounded-lg p-6 w-96 shadow-lg'>
				<h2 className='text-lg font-semibold text-gray-800 mb-4'>{title}</h2>
				<div className='mb-6 text-gray-600'>{children}</div>
				<div className='flex justify-end gap-4'>
					<button
						onClick={onCancel}
						className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
					>
						{cancelText}
					</button>
					<button
						onClick={onConfirm}
						className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Dialog
