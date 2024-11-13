/* eslint-disable max-len */
import {Request} from "firebase-functions/v2/https";
import {IResponse} from "../interfaces/response.interface";
import {ISubscription} from "../interfaces/subscription";
import {subscriptionUseCase} from "../usecases/subscription.usecase";

export const subscriptionController = async (req: Request): Promise<IResponse<boolean>> => {
  const sub:ISubscription = req.body as ISubscription;
  const success: boolean = await subscriptionUseCase(sub);
  const message: string = success ? "Userio suscrito." : "Error suscribiendose.";

  const response: IResponse<boolean> = {
    success,
    message: message,
    data: success,
  };
  return response;
};
