"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmailByEmail = exports.createEmail = void 0;
const database_1 = __importDefault(require("../config/database"));
const createEmail = async (email) => {
    const result = await database_1.default.query('INSERT INTO emails (email) VALUES ($1) RETURNING *', [email]);
    return result.rows[0];
};
exports.createEmail = createEmail;
const findEmailByEmail = async (email) => {
    const result = await database_1.default.query('SELECT * FROM emails WHERE email = $1', [email]);
    return result.rows[0] || null;
};
exports.findEmailByEmail = findEmailByEmail;
