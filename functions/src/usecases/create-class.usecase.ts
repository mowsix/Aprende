/* eslint-disable max-len */
import admin = require("firebase-admin");
import {DB} from "../infraestructure/config";
import {IClass} from "../interfaces/class.interface";


export const createClassUseCase = async (lesson: IClass): Promise<boolean> => {
  return await admin.database()
    .ref()
    .child(DB.LEARN)
    .child(DB.LESSONS)
    .push(lesson)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log("saveClassUseCase error:", err);
      return false;
    });
};
