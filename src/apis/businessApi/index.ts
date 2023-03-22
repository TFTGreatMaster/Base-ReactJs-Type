import { BaseApi } from "../baseApi";
import { BasePagination, Domain, IBaseSearchListQueryParams } from "../types";

const api = BaseApi(Domain.ITEM)


export function businessApi() {
    function getAll<T, R>(data: any, queries?: IBaseSearchListQueryParams & T): Promise<BasePagination<R>> {
        return api.getAll<any, T, R>(data, queries)
    }
    return {
        getAll
    }
};