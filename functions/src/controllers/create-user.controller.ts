/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IResponse} from "../interfaces/response.interface";
import {IUser} from "../interfaces/user.interface";
import {createUserUseCase} from "../usecases/create-user.usecase";

export const createUserController = async (req: Request): Promise<IResponse<boolean>> => {
  const user:IUser = req.body as IUser;
  const success: boolean = await createUserUseCase(user);
  const message: string = success ? "User created." : "Error creating user.";

  const response: IResponse<boolean> = {
    success,
    message: message,
    data: success,
  };
  return response;
};
