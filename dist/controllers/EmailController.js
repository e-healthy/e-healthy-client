"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveEmail = void 0;
const EmailModel_1 = require("../models/EmailModel");
const saveEmail = async (req, res) => {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Email inválido.' });
    }
    const existingEmail = await (0, EmailModel_1.findEmailByEmail)(email);
    if (existingEmail) {
        return res.status(409).json({ message: 'Email já cadastrado.' });
    }
    try {
        const newEmail = await (0, EmailModel_1.createEmail)(email);
        return res.status(201).json(newEmail);
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro ao salvar o email.' });
    }
};
exports.saveEmail = saveEmail;
