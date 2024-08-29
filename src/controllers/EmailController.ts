import { Request, Response } from 'express';
import { createEmail, findEmailByEmail } from '../models/EmailModel';

export const saveEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Email inválido.' });
  }

  const existingEmail = await findEmailByEmail(email);

  if (existingEmail) {
    return res.status(409).json({ message: 'Email já cadastrado.' });
  }

  try {
    const newEmail = await createEmail(email);
    return res.status(201).json(newEmail);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao salvar o email.' });
  }
};
