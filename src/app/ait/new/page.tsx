'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/Button'
import MaskedInput from '@/components/InputMasked'
import DateTimePicker from '@/components/Datepicker'
import { AitFormData, aitSchema } from '@/schemas/ait'
import TextArea from '@/components/TextArea'
import { useCreateAit } from '@/hooks/useCreateAit'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { CreateAitDto } from '@/generated'
import { useQueryClient } from '@tanstack/react-query'
import { parseBrazilianCurrency } from '@/utils/currency'
import { AITS_QUERY_KEY } from '@/utils/constants'
import { formatToJSDate } from '@/utils/dates'

const NewAit = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isLoading: isLoadingForm },
	} = useForm<AitFormData>({
		resolver: zodResolver(aitSchema),
		defaultValues: {
			descricao: '',
			placaVeiculo: '',
			valorMulta: '',
			dataInfracao: '',
		},
	})

	const { mutate: createAit, isPending } = useCreateAit({
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [AITS_QUERY_KEY] })
			toast.success('AIT criada com sucesso')
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
			dataInfracao: formatToJSDate(data.dataInfracao),
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
					<Controller
						name='dataInfracao'
						control={control}
						render={({ field }) => (
							<DateTimePicker
								value={field.value}
								onChange={field.onChange}
								label='Data da Infração'
								errorMessage={errors.dataInfracao?.message}
							/>
						)}
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
