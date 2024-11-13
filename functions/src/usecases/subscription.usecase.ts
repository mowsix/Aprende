/* eslint-disable max-len */
import admin = require("firebase-admin");
import {DB} from "../infraestructure/config";
import {ISubscription} from "../interfaces/subscription";


export const subscriptionUseCase = async (sub: ISubscription): Promise<boolean> => {
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.SUBS)
    .child(sub.subscriptionId.toString())
    .push(sub)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log("saveSUB error:", err);
      return false;
    });
};
