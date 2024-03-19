import express from "express";
import { teacherLogin, teacherSignup } from "../controllers/teacherControls.js";
import {
  addStudent,
  getStudent,
  removeStudent,
} from "../controllers/studentControls.js";

const router = express.Router();

router.post("/teacherSignup", teacherSignup);
router.post("/teacherLogin", teacherLogin);
router.post("/addStudent", addStudent);
router.post("/getStudent", getStudent);
router.post("/removeStudent", removeStudent);

export default router;
