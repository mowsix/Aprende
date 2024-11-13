/* eslint-disable max-len */
import admin = require("firebase-admin");
import {IClass} from "../interfaces/class.interface";
import {DB} from "../infraestructure/config";


export const getLessonsUseCase = async (): Promise<IClass[]> => {
  let response: IClass[] =[];
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.LESSONS)
    .once("value")
    .then((res) => {
      response = Object.values(res.val()) as IClass[];
      return response;
    })
    .catch((err) => {
      console.log("getClientsUseCase error:", err);
      return response;
    });
};


