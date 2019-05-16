import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');

dotenv.config({ silent: true, path: envPath });

export const { MONGO_URL, DB_NAME, PORT } = process.env;
