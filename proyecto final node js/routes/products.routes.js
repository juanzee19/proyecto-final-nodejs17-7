import { Router } from "express";
import {
  getProductsController,
  getProductController,
  createProductController,
  deleteProductController,
} from "../controllers/products.controller.js";

const router = Router();



router.get("/", getProductsController);
router.get("/:id", getProductController);
router.post("/create", createProductController);
router.delete("/:id", deleteProductController);

export default router;
