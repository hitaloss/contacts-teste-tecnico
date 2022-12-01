import { Router } from "express";
import contactCreateController from "../controllers/contacts/contactCreate.controller";
import contactReadController from "../controllers/contacts/contactRead.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";
import authMiddleware from "../middlewares/auth.middleware";

const routes = Router();
export function contactsRouters() {
  routes.post("", authMiddleware, contactCreateController);
  routes.get("", authMiddleware, contactReadController);
  routes.patch("/:id", authMiddleware, contactUpdateController);
  return routes;
}
