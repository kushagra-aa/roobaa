import { Router } from "express";
import {
  addNewUser,
  changePassword,
  getUsers,
  loginUser,
  removeUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUsers).post(addNewUser);
router.route("/login").post(loginUser);
router.route("/:id").delete(removeUser);
router.route("/:id/change-password").patch(changePassword);

export default router;
