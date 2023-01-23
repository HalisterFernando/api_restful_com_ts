import mongoose from "mongoose";
import config from 'config';
import Logger from './logger';

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {

        await mongoose.connect(dbUri);
        Logger.info('Conectado ao banco de dados');

    } catch(err) {

        Logger.error('Não foi possível conectar ao banco de dados')
        Logger.error(`Erro ${err}`)
        process.exit(1)
    }

}

export default connect;