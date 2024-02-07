import { Router } from "express";
import addToCart from "../../controller/addToCart";
import getListCart from "../../controller/getListCart";

const router = Router();

router.get("/cart", getListCart);
router.post("/cart", addToCart);

export { router as cart };
