import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

const app = express();
app.use(express.json());

//user crud
app.post("/users", async (req: Request, res: Response) => {
  const { name, email, role } = req.body;
  try {
    const user = User.create({ name, email, role });
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});
app.get("/users", async (_: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
});
app.put("/users/:uuid", async (req: Request, res: Response) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOneOrFail({ uuid });
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    await user.save();
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
});
app.delete("/users/:uuid", async (req: Request, res: Response) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOneOrFail({ uuid });
    await user.remove();
    res.status(204).json({
      data: null,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
});
app.get("/users/:uuid", async (req: Request, res: Response) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ uuid });
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(404).json({ error });
  }
});
//post
app.post("/posts", async (req: Request, res: Response) => {
  const { title, body } = req.body;
  try {
    const post = Post.create({ title, body });
    await post.save();
    res.status(201).json({
      post,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
});
createConnection()
  .then(async () => {
    app.listen(3333, () => {
      console.log("listening to the port 3333");
    });
  })
  .catch((error) => console.log(error));
