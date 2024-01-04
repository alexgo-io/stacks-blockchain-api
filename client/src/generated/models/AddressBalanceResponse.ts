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
import {
    AddressTokenOfferingLocked,
    AddressTokenOfferingLockedFromJSON,
    AddressTokenOfferingLockedFromJSONTyped,
    AddressTokenOfferingLockedToJSON,
    StxBalance,
    StxBalanceFromJSON,
    StxBalanceFromJSONTyped,
    StxBalanceToJSON,
} from './';

/**
 * GET request that returns address balances
 * @export
 * @interface AddressBalanceResponse
 */
export interface AddressBalanceResponse {
    /**
     * 
     * @type {StxBalance}
     * @memberof AddressBalanceResponse
     */
    stx: StxBalance;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof AddressBalanceResponse
     */
    fungible_tokens: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof AddressBalanceResponse
     */
    non_fungible_tokens: { [key: string]: object; };
    /**
     * 
     * @type {AddressTokenOfferingLocked}
     * @memberof AddressBalanceResponse
     */
    token_offering_locked?: AddressTokenOfferingLocked;
}

export function AddressBalanceResponseFromJSON(json: any): AddressBalanceResponse {
    return AddressBalanceResponseFromJSONTyped(json, false);
}

export function AddressBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBalanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stx': StxBalanceFromJSON(json['stx']),
        'fungible_tokens': json['fungible_tokens'],
        'non_fungible_tokens': json['non_fungible_tokens'],
        'token_offering_locked': !exists(json, 'token_offering_locked') ? undefined : AddressTokenOfferingLockedFromJSON(json['token_offering_locked']),
    };
}

export function AddressBalanceResponseToJSON(value?: AddressBalanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stx': StxBalanceToJSON(value.stx),
        'fungible_tokens': value.fungible_tokens,
        'non_fungible_tokens': value.non_fungible_tokens,
        'token_offering_locked': AddressTokenOfferingLockedToJSON(value.token_offering_locked),
    };
}

