import { Request, Response, Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser
} from "./controllers/userController";
import { validade } from "./middleware/handleValidations";
import { userCreateValidation } from "./middleware/userValidation";

const router = Router();

export default router
  .post("/user/create", userCreateValidation(), validade, createUser)
  .get("/user/find/:id", getUserById)
  .get("/user/find", getAllUsers)
  .delete("/user/delete/:id", deleteUser);
