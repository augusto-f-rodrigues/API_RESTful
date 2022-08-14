//Express
import { Request, Response } from "express";

//Logger
import Logger from "../../config/logger";

//Model
import { UserModel } from "../models/User";

export async function createUser(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await UserModel.create(data);
    return res.status(200).json(user);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({msg: "Algo deu errado, tente novamente mais tarde."});
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "O usuário não existe." });
    }

    return res.status(200).json(user);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({msg: "Algo deu errado, tente novamente mais tarde."});
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({msg: "Algo deu errado, tente novamente mais tarde."});
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "O usuário não existe." });
    }

    user.delete();

    return res.status(200).json({msg: `Usuário de id: [${id}] removido com sucesso`});
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({msg: "Algo deu errado, tente novamente mais tarde."});
  }
  
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "O usuário não existe." });
    }

    user.updateOne({_id: id}, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({msg: "Algo deu errado, tente novamente mais tarde."});
  }
  
}