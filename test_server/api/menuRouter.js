import express from "express";
import { searchRestaurant, index, searchAllergy } from "./menuController";

const menuRouter = express.Router();

menuRouter.get("/all", index);
menuRouter.get("/allergySerch/:allergies", searchAllergy);

module.exports = menuRouter;
