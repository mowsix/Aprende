/* eslint-disable max-len */
import admin = require("firebase-admin");
import {DB} from "../infraestructure/config";
import {ISubscription} from "../interfaces/subscription";


export const getMySubsUseCase = async (): Promise<ISubscription[]> => {
  let response: ISubscription[] =[];
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.SUBS)
    .once("value")
    .then((res) => {
      response = Object.values(res.val()) as ISubscription[];
      return response;
    })
    .catch((err) => {
      console.log("getmySubUseCase error:", err);
      return response;
    });
};


