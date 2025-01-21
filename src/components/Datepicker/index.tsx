'use client'

import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { fromJSDateToBrazilianString, fromBrazilianStringToJSDate } from '@/utils/dates'
import { DateTimePickerProps } from './types'

const DateTimePicker = ({ value, onChange, label, errorMessage }: DateTimePickerProps) => {
	return (
		<div className='flex flex-col space-y-1'>
			{label && <label className='text-sm font-medium text-gray-700'>{label}</label>}
			<DatePicker
				selected={fromBrazilianStringToJSDate(value)}
				onChange={(date) => onChange(fromJSDateToBrazilianString(date))}
				showTimeSelect
				timeFormat='HH:mm'
				timeIntervals={15}
				dateFormat='dd/MM/yyyy HH:mm'
				className='w-full border border-gray-300 rounded-lg p-2 text-sm'
				placeholderText='dd/mm/yyyy hh:mm'
			/>
			{errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
		</div>
	)
}

export default DateTimePicker
