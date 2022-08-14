import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    Logger.info("Banco de dados conectado!");
  } catch (e) {
    Logger.error("Não foi possível conectar ao banco de dados.");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;