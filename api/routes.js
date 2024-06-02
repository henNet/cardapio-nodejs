import {Router} from "express";
import foodController from "../controller/food-controller.js";

const routes = Router();

routes.get("/food", foodController.select);
routes.post("/food", foodController.insert);
routes.put("/food/:id", foodController.update);
routes.delete("/food/:id", foodController.delet);

export default routes;