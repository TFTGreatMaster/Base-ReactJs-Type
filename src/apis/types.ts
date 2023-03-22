
export interface IBaseSearchListQueryParams {
    timKiemNhanh?: string;
    page?: number;
    pageSize?: number;
    isFetchAll?: boolean;
  }

export interface BasePagination<T> {
    items: T[];
    total: number;
  }

export enum Domain {
    ITEM = "/ITEM"
}