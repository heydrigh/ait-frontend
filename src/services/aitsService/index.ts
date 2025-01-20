import { Configuration, AITsApi } from '@/generated'
import apiClient from '../apiClient'
import type { Ait, AitPaginationResult, CreateAitDto, UpdateAitDto } from '@/generated/models'

const configuration = new Configuration({
	basePath: apiClient.defaults.baseURL,
})

const aitsApi = new AITsApi(configuration)

const findAllAits = async (page: number = 1, limit: number = 10): Promise<AitPaginationResult> => {
	try {
		const response = await aitsApi.aitControllerFindAll({ page, limit })
		return response
	} catch (error) {
		console.error('Error fetching AITs:', error)
		throw error
	}
}

const findAitById = async (id: string): Promise<Ait> => {
	try {
		return await aitsApi.aitControllerFindOne({ id })
	} catch (error) {
		console.error(`Error fetching AIT with ID ${id}:`, error)
		throw error
	}
}

const createAit = async (createAitDto: CreateAitDto): Promise<Ait> => {
	try {
		return await aitsApi.aitControllerCreate({ createAitDto })
	} catch (error) {
		console.error('Error creating AIT:', error)
		throw error
	}
}

const updateAit = async (id: string, updateAitDto: UpdateAitDto): Promise<Ait> => {
	try {
		return await aitsApi.aitControllerUpdate({ id, updateAitDto })
	} catch (error) {
		console.error(`Error updating AIT with ID ${id}:`, error)
		throw error
	}
}

const deleteAit = async (id: string): Promise<void> => {
	try {
		await aitsApi.aitControllerRemove({ id })
	} catch (error) {
		console.error(`Error deleting AIT with ID ${id}:`, error)
		throw error
	}
}

const processAits = async (): Promise<void> => {
	try {
		await aitsApi.aitControllerProcess()
		console.log('AIT processing successfully initiated.')
	} catch (error) {
		console.error('Error processing AITs:', error)
		throw error
	}
}

export const aitsApiService = {
	findAllAits,
	findAitById,
	createAit,
	updateAit,
	deleteAit,
	processAits,
}
