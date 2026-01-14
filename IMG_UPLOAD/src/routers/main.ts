import { Router } from "express";
import * as uploadController from "../controllers/upload";
import { upload } from "../libs/multer";

export const mainRouter = Router();

mainRouter.post("/upload", upload.single("arquivo"), uploadController.upload);
