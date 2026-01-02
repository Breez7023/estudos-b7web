import { Router } from "express";
import {
  createUser,
  getUserByEmail,
  createUsers,
  getAllUsers,
  UpdateUser,
  DeleteUser,
} from "../services/user";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
  const user = await createUser({
    name: "daniel3",
    email: "teste3@teste.com",
    Post: {
      create: {
        title: "teste",
        body: " teste",
      },
    },
  });
  if (user) {
    res.status(201).json({ user });
  } else {
    res.status(500).json({ error: "Email ja cadastrado" });
  }
});

mainRouter.post("/users", async (req, res) => {
  const result = await createUsers([
    { name: "user 1", email: "123" },
    { name: "User 2", email: "124" },
    { name: "User 3", email: "321" },
  ]);
  res.json({ result });
});

mainRouter.get("/users", async (req, res) => {
  const result = await getAllUsers();
  res.json({ result });
});

mainRouter.get("/user", async (req, res) => {
  const result = await getUserByEmail("teste@teste.com");
  res.json({ result });
});

mainRouter.put("/user", async (req, res) => {
  const result = await UpdateUser();
  res.json({ result });
});

mainRouter.delete("/user", async (req, res) => {
  const result = await DeleteUser();
  res.json({ result });
});
