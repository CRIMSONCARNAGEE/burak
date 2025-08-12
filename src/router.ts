import express from "express";
import membercontroller from "./controller/member.controller";
const router = express.Router();

router.get('/', membercontroller.goHome);

router.get('/login', membercontroller.getLogin);

router.get('/signup', membercontroller.getSignUp);

export default router;