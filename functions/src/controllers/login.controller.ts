/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IResponse} from "../interfaces/response.interface";
import {ILogin} from "../interfaces/login.interface";
import {getUsersUseCase} from "../usecases/get-users.usecase";
import {IUser} from "../interfaces/user.interface";


export const loginController = async (req: Request): Promise<IResponse<IUser | undefined>> => {
  const login:ILogin = req.body as ILogin;
  const users: IUser[]= await getUsersUseCase();

  const user:IUser | undefined = users.find((item) => ((item.userEmail ===login.userEmail) && (item.userPassword===login.userPassword)));

  const message: string = user ? "Usuario encontrado." : "Usuario inexistente.";

  const response: IResponse<IUser | undefined> = {
    success: user!=undefined,
    message: message,
    data: user,
  };
  return response;
};
