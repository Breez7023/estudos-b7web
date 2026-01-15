import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from "node:fs/promises";

export const upload: RequestHandler = async (req, res) => {
  if (req.file) {
    const newName = v4() + ".png";
    const image = await sharp(req.file.path)
      .resize(1280, 720, {
        fit: "cover",
      })
      // .composite([
      //   { input: "./src/assets/logo-white.png", gravity: "southeast" },
      // ])
      //.tint({ r: 255, g: 255, b: 255 })
      .toFormat("png")
      .toFile("./public/images/" + newName);

    await fs.unlink(req.file.path);
  } else {
    console.log("Nenhum arquivo enviado.");
  }
  res.json({});
};
