export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL'): string => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(value)
}

export const parseBrazilianCurrency = (value: string): number => {
	const numericValue = value.replace(/[^\d,]/g, '').replace(',', '.')
	return parseFloat(numericValue)
}
