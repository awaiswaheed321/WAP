import { Router } from "express";
import * as Service from "./service.js";

const router = Router();

router.get("/home", Service.getHome);
router.get("/", Service.getHome);
router.get("/image", Service.getImage);
router.get("/pdf", Service.getPdf);
router.get("/about", Service.getAbout);

export default router;
