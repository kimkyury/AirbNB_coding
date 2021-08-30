import express from "express";
import { searchRestaurant, index } from "./menuController";

const menuRouter = express.Router();

menuRouter.get("/all", index);
menuRouter.get("/restaurantName/:restaurantName", searchRestaurant);

module.exports = menuRouter;
