import express from "express";
import produtosRouter from "./produtos.js";
import intervir from "../middlewares/intervir.js";

const router = express.Router();

router.use(intervir);

router.use("/produtos", produtosRouter);

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});
router.get("/voos/:from/:to", (req, res) => {
  const { from, to } = req.params;
  res.json({
    flight: {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      price: 67,
    },
  });
});
router.get("/", (req, res) => {
  let name = "Daniel";
  let age = "19";
  res.json({ name, age });
});

export default router;
