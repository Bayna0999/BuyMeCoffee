import { Request, response, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../utils/prisma";
export const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const response = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

export const findUser = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  try {
    const response = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        password,
        name,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return res.send({
      success: true,
      message: "deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
