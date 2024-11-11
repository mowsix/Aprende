/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IResponse} from "../interfaces/response.interface";

import {IUser} from "../interfaces/user.interface";
import {getMySubsUseCase} from "../usecases/get-my-subscriptions.usecase";
import {ISubscription} from "../interfaces/subscription";

export const getMySubsController = async (req: Request): Promise<IResponse<ISubscription[]>> => {
  const user:IUser = req.body as IUser;
  const subs: ISubscription[] = await getMySubsUseCase();
  const mysubs:ISubscription[] = subs.filter((item) => item.subscriptionUser.userFullName === user.userFullName );
  const response: IResponse<ISubscription[]> = {
    success: true,
    message: "Information subs.",
    data: mysubs,
  };
  return response;
};
