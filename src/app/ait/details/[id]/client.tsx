'use client'
import { AitDetailsClientProps } from './types'
import { formatCurrency } from '@/utils/currency'
import { fromJSDateToBrazilianString } from '@/utils/dates'

export default function AitDetailsClient({ ait }: AitDetailsClientProps) {
	return (
		<div className='max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg'>
			<h1 className='text-2xl font-bold mb-6'>Detalhes do AIT {ait.id}</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<h2 className='text-sm font-medium text-gray-500'>Placa do Veículo</h2>
					<p className='text-lg font-semibold text-gray-800'>{ait.placaVeiculo}</p>
				</div>
				<div>
					<h2 className='text-sm font-medium text-gray-500'>Data da Infração</h2>
					<p className='text-lg font-semibold text-gray-800'>
						{fromJSDateToBrazilianString(ait.dataInfracao)}
					</p>
				</div>
				<div className='sm:col-span-2'>
					<h2 className='text-sm font-medium text-gray-500'>Descrição</h2>
					<p className='text-lg font-semibold text-gray-800'>{ait.descricao}</p>
				</div>
				<div>
					<h2 className='text-sm font-medium text-gray-500'>Valor da Multa</h2>
					<p className='text-lg font-semibold text-gray-800'>{formatCurrency(ait.valorMulta)}</p>
				</div>
			</div>
			<div className='mt-6'>
				<button
					className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
					onClick={() => alert(`Editing AIT ${ait.id}`)}
				>
					Editar
				</button>
			</div>
		</div>
	)
}
