/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountRestrictionFlagsEnum } from './accountRestrictionFlagsEnum';

export class AccountMosaicRestrictionTransactionBodyDTO {
    'restrictionType': AccountRestrictionFlagsEnum;
    /**
    * Account restriction additions.
    */
    'restrictionAdditions': Array<string>;
    /**
    * Account restriction deletions.
    */
    'restrictionDeletions': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "restrictionType",
            "baseName": "restrictionType",
            "type": "AccountRestrictionFlagsEnum"
        },
        {
            "name": "restrictionAdditions",
            "baseName": "restrictionAdditions",
            "type": "Array<string>"
        },
        {
            "name": "restrictionDeletions",
            "baseName": "restrictionDeletions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AccountMosaicRestrictionTransactionBodyDTO.attributeTypeMap;
    }
}

