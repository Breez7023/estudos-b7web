import { connect } from "mongoose";
import dotenv from "dotenv";
export const mongoConnect = async () => {
  try {
    console.log("Conectando");
    await connect(process.env.MONGO_URL as string, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log("Erro conexao com o mongo:", error);
  }
};
