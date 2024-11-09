/* eslint-disable max-len */
export interface IResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

