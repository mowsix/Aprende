/* eslint-disable max-len */
import admin = require("firebase-admin");

import {DB} from "../infraestructure/config";
import {IUser} from "../interfaces/user.interface";


export const getUsersUseCase = async (): Promise<IUser[]> => {
  let response: IUser[] =[];
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.USER)
    .once("value")
    .then((res) => {
      response = Object.values(res.val()) as IUser[];
      return response;
    })
    .catch((err) => {
      console.log("getUSER error:", err);
      return response;
    });
};


