import Axios from "axios";

import { BasePagination, Domain, IBaseSearchListQueryParams } from './types';
import { DOMAIN_DEVELOVPMENT, HTTP_METHOD } from './constans';

export function BaseApi(domain: Domain) {

  const configUrl = DOMAIN_DEVELOVPMENT + domain

  async function getAll<T, R, P>(
    data: T,
    queries = {} as IBaseSearchListQueryParams & R
  ): Promise<BasePagination<P>> {
    const url = Object.keys(queries).reduce(
      (prev, curr) => prev + `${curr} = ${queries[curr as keyof IBaseSearchListQueryParams & R]}`,
      `${configUrl}?`
    )
    return Axios<BasePagination<P>>(
      {
        url: url,
        data: data,
        method: HTTP_METHOD.GET
      }
    ).then((res) => res.data)
      .catch((res) => res.error);
  }

  async function getById<T>(id: String): Promise<T> {
    return Axios<T>({
      url: `${configUrl}/${id}`,
      method: HTTP_METHOD.GET
    }
    ).then((res) => res.data)
      .catch((res) => res.error);
  }

  async function updateById<T, R>(id: String, body: R): Promise<T> {

    return Axios<T>({
      url: `${configUrl}/${id}`,
      params: body,
    }).then((res) => res.data)
      .catch((res) => res.error);
  }

  async function create<T, R>(body: R): Promise<T> {
    return Axios<T>({
      url: configUrl,
      params: body,
    }).then((res) => res) //TODO: 
      .catch((res) => res.error);
  }

  async function deleteById<T>(id: String): Promise<T> {
    return Axios<T>({
      url: `${configUrl}/${id}`,
    }).then((res) => res) //TODO:
      .catch((res) => res.error);
  }

  return {
    getAll,
    getById,
    updateById,
    create,
    deleteById
  }
}
