import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middlewares/morganMiddleware';
require('dotenv').config();

const app = express();

app.use(express.json())

const PORT = config.get<number>('port')

app.use(morganMiddleware)
app.use('/api/', router)

app.listen(PORT, async () => {

    await db()
    Logger.info(`App rodando na porta ${PORT}`)
})