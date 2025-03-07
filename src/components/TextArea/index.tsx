import { TextAreaProps } from './types'

const TextArea = ({ label, error, ...rest }: TextAreaProps) => {
	return (
		<div className='flex flex-col gap-1'>
			{label && (
				<label
					htmlFor={rest.name || rest.id}
					className='text-sm font-medium text-gray-700 dark:text-gray-300'
				>
					{label}
				</label>
			)}

			<textarea
				{...rest}
				id={rest.name || rest.id}
				className={`w-full px-4 py-2 border rounded-md focus:outline-none resize-none ${
					error
						? 'border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
				} transition-all duration-150`}
			/>

			{error && (
				<p className='text-sm text-red-500' role='alert'>
					{error}
				</p>
			)}
		</div>
	)
}

export default TextArea
