import { Router } from "express";
import {
  VerifyUser,
  createUser,
  getAllUsers,
  getCookieUser,
  logOutUser,
  signInUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/register-account").post(createUser);
router.route("/verify-account").post(VerifyUser);
router.route("/login-account").post(signInUser);
router.route("/get-all-users").get(getAllUsers);
router.route("/logout").delete(logOutUser);
router.route("/get-user-cookie/").get(getCookieUser);

export default router;
