import { Request, Response } from "express";
import bcrypt, { compareSync } from "bcrypt";
import { prisma } from "../../utils/prisma";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { secret_key } from "../../utils/env";
configDotenv();
export const signIn = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) return res.send({ message: "user not found" });
    const isMatch = compareSync(password, user.password);
    if (!isMatch) return res.send({ message: "Email or password incorrect" });
    const token = jwt.sign(user, secret_key as string, { expiresIn: 3600 });

    return res.cookie("token", token, {
      maxAge: 60 * 1000 * 10,
      secure: false,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
