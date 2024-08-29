import pool from '../config/database';

interface Email {
  id?: number;
  email: string;
}

export const createEmail = async (email: string): Promise<Email> => {
  const result = await pool.query(
    'INSERT INTO emails (email) VALUES ($1) RETURNING *',
    [email]
  );
  return result.rows[0];
};

export const findEmailByEmail = async (email: string): Promise<Email | null> => {
  const result = await pool.query(
    'SELECT * FROM emails WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
};
