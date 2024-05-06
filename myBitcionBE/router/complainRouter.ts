import { Router } from "express";
import {
  createUserComplain,
  markAsSeenComplain,
  markResolveComplain,
  viewUsersComplains,

} from "../controller/complainController";

const router: Router = Router();

router.route("/create-user-complain/:userID").post(createUserComplain);

router.route("/mark-seen/:adminID/:complainID").patch(markAsSeenComplain);
router.route("/mark-resolve/:adminID/:complainID").patch(markResolveComplain);

router.route("/view-user-complain/:userID").get(viewUsersComplains);

export default router;
