/* tslint:disable */
/* eslint-disable */
/**
 * AIT  doc
 * AIT documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Ait,
  AitPaginationResult,
  CreateAitDto,
  UpdateAitDto,
} from '../models/index';
import {
    AitFromJSON,
    AitToJSON,
    AitPaginationResultFromJSON,
    AitPaginationResultToJSON,
    CreateAitDtoFromJSON,
    CreateAitDtoToJSON,
    UpdateAitDtoFromJSON,
    UpdateAitDtoToJSON,
} from '../models/index';

export interface AitControllerCreateRequest {
    createAitDto: CreateAitDto;
}

export interface AitControllerFindAllRequest {
    page?: number;
    limit?: number;
}

export interface AitControllerFindOneRequest {
    id: string;
}

export interface AitControllerRemoveRequest {
    id: string;
}

export interface AitControllerUpdateRequest {
    id: string;
    updateAitDto: UpdateAitDto;
}

/**
 * 
 */
export class AITsApi extends runtime.BaseAPI {

    /**
     * Create a new AIT
     */
    async aitControllerCreateRaw(requestParameters: AitControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ait>> {
        if (requestParameters['createAitDto'] == null) {
            throw new runtime.RequiredError(
                'createAitDto',
                'Required parameter "createAitDto" was null or undefined when calling aitControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/aits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAitDtoToJSON(requestParameters['createAitDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AitFromJSON(jsonValue));
    }

    /**
     * Create a new AIT
     */
    async aitControllerCreate(requestParameters: AitControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ait> {
        const response = await this.aitControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all AITs with pagination
     */
    async aitControllerFindAllRaw(requestParameters: AitControllerFindAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AitPaginationResult>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/aits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AitPaginationResultFromJSON(jsonValue));
    }

    /**
     * Retrieve all AITs with pagination
     */
    async aitControllerFindAll(requestParameters: AitControllerFindAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AitPaginationResult> {
        const response = await this.aitControllerFindAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a single AIT by ID
     */
    async aitControllerFindOneRaw(requestParameters: AitControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ait>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling aitControllerFindOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/aits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AitFromJSON(jsonValue));
    }

    /**
     * Retrieve a single AIT by ID
     */
    async aitControllerFindOne(requestParameters: AitControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ait> {
        const response = await this.aitControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process and download AITs as a CSV file
     */
    async aitControllerProcessRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/aits/process`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Process and download AITs as a CSV file
     */
    async aitControllerProcess(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aitControllerProcessRaw(initOverrides);
    }

    /**
     * Delete an AIT by ID
     */
    async aitControllerRemoveRaw(requestParameters: AitControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling aitControllerRemove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/aits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an AIT by ID
     */
    async aitControllerRemove(requestParameters: AitControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.aitControllerRemoveRaw(requestParameters, initOverrides);
    }

    /**
     * Update an AIT by ID
     */
    async aitControllerUpdateRaw(requestParameters: AitControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ait>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling aitControllerUpdate().'
            );
        }

        if (requestParameters['updateAitDto'] == null) {
            throw new runtime.RequiredError(
                'updateAitDto',
                'Required parameter "updateAitDto" was null or undefined when calling aitControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/aits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAitDtoToJSON(requestParameters['updateAitDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AitFromJSON(jsonValue));
    }

    /**
     * Update an AIT by ID
     */
    async aitControllerUpdate(requestParameters: AitControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ait> {
        const response = await this.aitControllerUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
