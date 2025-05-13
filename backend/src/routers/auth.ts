import { Router } from "express";
import { signIn } from "../controllers/auth/sign-in.controller";
import { signUp } from "../controllers/auth/sign-up.controller";

export const authRouter = Router();

authRouter.post("/", signIn as any).post("/signUp", signUp as any);
