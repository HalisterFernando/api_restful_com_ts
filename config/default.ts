import 'dotenv/config';

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbEnv = process.env.DB_ENV;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vfdqmjx.mongodb.net/?retryWrites=true&w=majority`,
    env: dbEnv
}