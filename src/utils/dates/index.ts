import moment from 'moment'

export const formatToBrazilianDateTime = (date: string | Date): string => {
	return moment(date).format('DD/MM/YYYY HH:mm:ss')
}
