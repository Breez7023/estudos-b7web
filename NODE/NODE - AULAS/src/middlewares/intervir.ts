import type { RequestHandler } from "express";

export const intervir: RequestHandler = (req, res, next) => {
  let logged = true;
  if (logged) {
    next();
  } else {
    res.status(403).json({ error: "Middleware nao permitiu" });
  }
};
export default intervir;
