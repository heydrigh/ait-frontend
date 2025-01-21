import { z } from 'zod'

export const aitSchema = z.object({
	placaVeiculo: z
		.string()
		.min(7, 'Placa deve ter 7 caracteres')
		.max(8, 'Placa deve ter no máximo 8 caracteres'),
	dataInfracao: z
		.string()
		.refine((value) => !isNaN(Date.parse(value)), { message: 'Data inválida' }),
	descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
	valorMulta: z
		.string()
		.transform((value) => value.replace(/[^0-9]/g, ''))
		.refine(
			(value) => {
				const numericValue = Number(value) / 100
				return numericValue > 0
			},
			{
				message: 'O valor deve ser um número maior que zero',
			}
		),
})

export type AitFormData = z.infer<typeof aitSchema>
