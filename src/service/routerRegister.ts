import { cart } from "../api/route/cart";
import { Express } from "express";
import { item } from "../api/route/item";

function routerRegister(app: Express) {
  app.use(cart, item);
}

export default routerRegister;
