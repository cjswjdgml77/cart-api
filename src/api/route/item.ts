import { Router } from "express";
import getListItem from "../../controller/getListItem";

const router = Router();

router.get("/list", getListItem);

export { router as item };
