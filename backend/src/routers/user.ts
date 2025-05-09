import { Router } from "express";
import {
  createUser,
  deleteUserById,
  findUser,
  updateUserById,
} from "../controllers/user";

export const router = Router();

router
  .post("/", createUser as any)
  .get("/", findUser as any)
  .put("/:id", updateUserById as any)
  .delete("/:id", deleteUserById as any);
