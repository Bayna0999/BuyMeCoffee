import { Request, Response } from "express";
import bcrypt, { compareSync } from "bcrypt";
import { prisma } from "../../utils/prisma";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { secret_key } from "../../utils/env";
configDotenv();

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password, "FROM BODY");

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user, "USER");

    if (!user) return res.send({ message: "user not found" });
    const isMatch = bcrypt.compareSync(password, user.password);
    console.log(isMatch, "PASSWORD MATCH");

    if (!isMatch) return res.send({ message: "Email or password incorrect" });
    const token = jwt.sign(user, process.env.Secret as string, {
      expiresIn: 3600,
    });
    console.log(token, "TOKEN");

    res.cookie("token", token, {
      maxAge: 60 * 1000 * 10,
      secure: false,
    });
    return res.send({ success: true, token: token });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
