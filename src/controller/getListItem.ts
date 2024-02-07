import { Request, Response } from "express";
import { itemList } from "../datas";
function getListItem(req: Request, res: Response) {
  res.send(itemList);
}

export default getListItem;
