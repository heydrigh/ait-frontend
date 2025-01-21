import { DateTime } from 'luxon'

export const formatToISODateTimeLocal = (date: Date): string => {
	return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd'T'HH:mm")
}

export const formatToJSDate = (date: string): Date => {
	if (!date) throw new RangeError('Date string is empty or undefined')

	const parsedDate = DateTime.fromFormat(date, 'dd/MM/yyyy HH:mm')
	if (!parsedDate.isValid) throw new RangeError('Invalid time value')

	return parsedDate.toJSDate()
}

export const fromBrazilianStringToJSDate = (value: string | null | undefined): Date | null => {
	if (!value) return null
	return DateTime.fromFormat(value, 'dd/MM/yyyy HH:mm').toJSDate()
}

export const fromJSDateToBrazilianString = (date: Date | null | undefined): string => {
	if (!date) return ''
	return DateTime.fromJSDate(date).toFormat('dd/MM/yyyy HH:mm')
}
