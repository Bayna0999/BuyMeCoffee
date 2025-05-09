import express, { json } from "express";
import { router } from "./routers/user";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.use("/user", router);
app.listen(8000, () => {
  console.log("server running at http://localhost:8000");
});
