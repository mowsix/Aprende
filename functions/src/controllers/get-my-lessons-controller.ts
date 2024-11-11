/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IClass} from "../interfaces/class.interface";
import {IResponse} from "../interfaces/response.interface";
import {getMyLessonsUseCase} from "../usecases/get-my-lessons.usecase";
import {IUser} from "../interfaces/user.interface";

export const getMyLessonsController = async (req: Request): Promise<IResponse<IClass[]>> => {
  const user:IUser = req.body as IUser;
  const lessons: IClass[] = await getMyLessonsUseCase();
  const myLessons:IClass[] = lessons.filter((item) => item.classOwner === user.userFullName );
  const response: IResponse<IClass[]> = {
    success: true,
    message: "information lessons.",
    data: myLessons,
  };
  return response;
};
