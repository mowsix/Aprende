/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IResponse} from "../interfaces/response.interface";
import {IClass} from "../interfaces/class.interface";
import {createClassUseCase} from "../usecases/create-class.usecase";

export const createClassController = async (req: Request): Promise<IResponse<boolean>> => {
  const newLesson:IClass = req.body as IClass;
  const classId = new Date().getTime();
  const lesson = {...newLesson, classId};
  const success: boolean = await createClassUseCase(lesson);
  const message: string = success ? "Class created." : "Error creating Class.";
  const response: IResponse<boolean> = {
    success,
    message: message,
    data: success,
  };
  return response;
};
