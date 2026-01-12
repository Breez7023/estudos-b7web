import express from "express";
import z from "zod";
import postsSchema from "./schemas/postsSchema";

const server = express();

server.use(express.json);
server.use(express.urlencoded({ extended: true }));

server.post("/user", (req, res) => {
  const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18),
  });
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.json({ error: "dados invalidos" });
  }
  const { name, email, age } = result.data;
  console.log("Processando...");
  console.log(name, email, age);
  res.status(201).json({ result: "tudo ok" });
});
server.get("/posts", async (req, res) => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await request.json();

  const result = postsSchema.safeParse(data);

  console.log(result);

  res.json({});
});
server.listen(3001, () => {
  console.log("Rodando");
});
