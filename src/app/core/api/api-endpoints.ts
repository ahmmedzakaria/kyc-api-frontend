import {ApiEndpoint} from "./model/endpoint";

export enum ActionTypes {
    CREATE = 1,
    UPDATE = 2,
    DELETE = 3,
    SEARCH = 4,
    LOGIN = 5,
}

export const ApiEndpoints: { [key: string]: ApiEndpoint } = {
    // KYC
    KYC_CREATE: { service: 'KYC', apiPath: 'kyc/create', actionType: ActionTypes.CREATE, isMultiPart: true },
    KYC_UPDATE: { service: 'KYC', apiPath: 'kyc/update', actionType: ActionTypes.UPDATE, isMultiPart: true },
    KYC_DELETE: { service: 'KYC', apiPath: 'kyc/delete', actionType: ActionTypes.DELETE },
    KYC_SEARCH: { service: 'KYC', apiPath: 'kyc/search', actionType: ActionTypes.SEARCH },

    // Authentication
    KYC_LOGIN: { service: 'LOGIN', apiPath: 'auth/authenticate', actionType: ActionTypes.LOGIN }
};
