import {initializeApp} from "firebase-admin/app";
import {onRequest} from "firebase-functions/v2/https";
import {createUserController} from "./controllers/create-user.controller";
import {IResponse} from "./interfaces/response.interface";
import {createClassController} from "./controllers/create-class.controller.ts";
import {getLessonsController} from "./controllers/get-lessons-controller";
import {loginController} from "./controllers/login.controller";
import {subscriptionController} from "./controllers/subscription.controller";
initializeApp();

export const CreateUser = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  try {
    const response = await createUserController(req);
    res.status(200).send(response);
  } catch (error) {
    const response: IResponse<null> = {
      success: false,
      message: "User could not be created",
      data: null,
    };
    res.status(401).send(response);
  }
});

export const CreateClass = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  try {
    const response = await createClassController(req);
    res.status(200).send(response);
  } catch (error) {
    const response: IResponse<null> = {
      success: false,
      message: "Class could not be created",
      data: null,
    };
    res.status(401).send(response);
  }
});

export const GetLessons = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  try {
    const response = await getLessonsController();
    res.status(200).send(response);
  } catch (error) {
    const response: IResponse<null> = {
      success: false,
      message: "no Se encontraron Clases",
      data: null,
    };
    res.status(401).send(response);
  }
});

export const LoginUser = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  try {
    const response = await loginController(req);
    res.status(200).send(response);
  } catch (error) {
    const response: IResponse<null> = {
      success: false,
      message: "Userio no encontrado",
      data: null,
    };
    res.status(401).send(response);
  }
});


export const Subscribe = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  try {
    const response = await subscriptionController(req);
    res.status(200).send(response);
  } catch (error) {
    const response: IResponse<null> = {
      success: false,
      message: "No se pudo suscribir",
      data: null,
    };
    res.status(401).send(response);
  }
});
