/* eslint-disable max-len */
import admin = require("firebase-admin");
import {IUser} from "../interfaces/user.interface";
import {DB} from "../infraestructure/config";


export const createUserUseCase = async (user: IUser): Promise<boolean> => {
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.USER)
    .push(user)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log("saveUserUseCase error:", err);
      return false;
    });
};
