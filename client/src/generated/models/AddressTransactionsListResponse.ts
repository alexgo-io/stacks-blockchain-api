/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * GET request that returns account transactions
 * @export
 * @interface AddressTransactionsListResponse
 */
export interface AddressTransactionsListResponse {
    /**
     * 
     * @type {number}
     * @memberof AddressTransactionsListResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof AddressTransactionsListResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof AddressTransactionsListResponse
     */
    total: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof AddressTransactionsListResponse
     */
    results: Array<object>;
}

export function AddressTransactionsListResponseFromJSON(json: any): AddressTransactionsListResponse {
    return AddressTransactionsListResponseFromJSONTyped(json, false);
}

export function AddressTransactionsListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressTransactionsListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'offset': json['offset'],
        'total': json['total'],
        'results': json['results'],
    };
}

export function AddressTransactionsListResponseToJSON(value?: AddressTransactionsListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
        'total': value.total,
        'results': value.results,
    };
}

