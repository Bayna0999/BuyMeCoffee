import { Express } from "express";

export const Profile = (req: Request, res: Response) => {
  const {
    id,
    name,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;
};
