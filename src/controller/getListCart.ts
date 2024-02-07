import { redis } from "..";
import { Request, Response } from "express";
function getListCart(req: Request, res: Response) {
  const data = redis.getAllCart(req.sessionID);
  res.send(data);
}

export default getListCart;
