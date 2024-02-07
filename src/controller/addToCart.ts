import { Request, Response } from "express";
import { redis } from "..";
async function addToCart(req: Request, res: Response) {
  const sessionId = req.sessionID;
  const data = await redis.getAllCart(sessionId);
  res.send(data);
}

export default addToCart;
