import { cart } from "../api/route/cart";
import { Express } from "express";

function routerRegister(app: Express) {
  app.use(cart);
}

export default routerRegister;
