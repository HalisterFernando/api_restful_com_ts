import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';
require('dotenv').config();

const app = express();

app.use(express.json())

const PORT = config.get<number>('port')

app.use('/api/', router)

app.listen(PORT, async () => {

    await db()
    Logger.info(`App rodando na porta ${PORT}`)
})