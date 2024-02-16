import { Router } from "express";
import {
  addNewUser,
  changePassword,
  getUsers,
  removeUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUsers).post(addNewUser);
router.route("/:id").delete(removeUser);
router.route("/:id/change-password").patch(changePassword);

export default router;
