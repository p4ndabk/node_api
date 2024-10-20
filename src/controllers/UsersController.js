import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsersController {
  async store(req, res) {
    const { nome, email } = req.body;
    try {
      const user = await prisma.usuario.create({
        data: { nome, email },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ mensagem: 'error', erro: error.message });
    }
  }
}

export default new UsersController();