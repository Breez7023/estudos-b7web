import { Request, Response } from "express";
import User from "../models/User";

export const addUserAction = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, age, interests } = req.body;
    const interestsArray = interests
      ? interests.split(",").map((i: string) => i.trim())
      : [];
    const newUser = new User({
      email,
      age: Number(age),
      interests: interestsArray,
      name: {
        firstName,
        lastName,
      },
    });
    await newUser.save();
    console.log("Usuário criado:", newUser);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Erro ao adicionar usuário");
  }
};
export const incrementAge = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await User.findById(id);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }
    usuario.age = (usuario.age || 0) + 1;
    await usuario.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Erro ao adicionar idade ao usuário");
  }
};

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};
