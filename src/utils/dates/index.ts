import { DateTime } from 'luxon'

export const formatToBrazilianDateTime = (isoDate: Date) => {
	const parsedDate = DateTime.fromJSDate(isoDate)

	return parsedDate.setLocale('pt-BR').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
}

export const formatToISODateTimeLocal = (date: Date): string => {
	return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd'T'HH:mm")
}
