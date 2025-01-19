export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL'): string => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(value)
}
