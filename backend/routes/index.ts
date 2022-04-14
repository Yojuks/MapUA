import express from "express";
import FilesController from "../controllers/FilesController";
import UserController from "../controllers/UserController";
import LocationsController from "../controllers/LocationsController";

const router = express.Router();

router.get("/users", UserController.getUsers);
router.get("/locations/:id", LocationsController.getLocationById);
router.post("/locations/add", LocationsController.addLocation);
router.post("/uploadImage", FilesController.uploadImage);

router.get("/locations/:zoom", LocationsController.getLocationsByZoom);

export default router;

