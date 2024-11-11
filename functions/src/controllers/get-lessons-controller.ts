/* eslint-disable max-len */

import {IClass} from "../interfaces/class.interface";
import {IResponse} from "../interfaces/response.interface";
import {getLessonsUseCase} from "../usecases/get-lessons.usecase";

export const getLessonsController = async (): Promise<IResponse<IClass[]>> => {
  const clients: IClass[] = await getLessonsUseCase();
  const response: IResponse<IClass[]> = {
    success: true,
    message: "Information clases.",
    data: clients,
  };
  return response;
};
