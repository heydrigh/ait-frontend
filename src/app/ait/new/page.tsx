'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/Button'
import Input from '@/components/Input'
import MaskedInput from '@/components/InputMasked'
import { AitFormData, aitSchema } from '@/schemas/ait'
import TextArea from '@/components/TextArea'
import { formatToISODateTimeLocal } from '@/utils/dates'
import { useCreateAit } from '@/hooks/useCreateAit'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { CreateAitDto } from '@/generated'
import { parseBrazilianCurrency } from '@/utils/currency'
import { useQueryClient } from '@tanstack/react-query'
import { AITS_QUERY_KEY } from '@/utils/constants'

const NewAit = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const {
		register,
		handleSubmit,

		formState: { errors, isLoading: isLoadingForm },
	} = useForm<AitFormData>({
		resolver: zodResolver(aitSchema),
		defaultValues: {
			descricao: '',
			placaVeiculo: '',
			valorMulta: '',
			dataInfracao: formatToISODateTimeLocal(new Date()),
		},
	})

	const { mutate: createAit, isPending } = useCreateAit({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [AITS_QUERY_KEY] })
			router.push('/')
		},
		onError: (error) => {
			toast.error(`Erro ao criar AIT: ${error.message}`)
		},
	})

	const onSubmit = (data: AitFormData) => {
		const createAitDTO = {
			...data,
			valorMulta: parseBrazilianCurrency(data.valorMulta),
			dataInfracao: new Date(data.dataInfracao),
		} satisfies CreateAitDto

		createAit(createAitDTO)
	}

	return (
		<div className='max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg'>
			<h1 className='text-2xl font-bold mb-6'>Novo AIT</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<div>
					<MaskedInput
						label='Placa do Veículo'
						mask={[{ mask: 'aaa-0000' }, { mask: 'aaa0a00' }]}
						placeholder='ABC-1234 or ABC1D23'
						error={errors.placaVeiculo?.message}
						{...register('placaVeiculo')}
					/>
				</div>
				<div>
					<Input
						label='Data da Infração'
						type='datetime-local'
						error={errors.dataInfracao?.message}
						{...register('dataInfracao')}
					/>
				</div>
				<div>
					<TextArea
						label='Descrição'
						placeholder='Descrição da infração'
						error={errors.descricao?.message}
						{...register('descricao')}
					/>
				</div>
				<div>
					<MaskedInput
						label='Valor da Multa'
						mask='R$ num'
						blocks={{
							num: {
								mask: Number,
								thousandsSeparator: '.',
								radix: ',',
								scale: 2,
							},
						}}
						placeholder='R$ 150,75'
						error={errors.valorMulta?.message}
						{...register('valorMulta')}
					/>
				</div>
				<div className='w-full flex justify-end'>
					<Button loading={isPending || isLoadingForm} variant='primary' type='submit'>
						Criar AIT
					</Button>
				</div>
			</form>
		</div>
	)
}

export default NewAit
