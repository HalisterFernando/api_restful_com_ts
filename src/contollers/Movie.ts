import { Request, Response } from 'express'
import  movieModel  from '../models/Movie';
import Logger from '../../config/logger';


async function createMovie(req: Request, res: Response) {
    try {

        const data = req.body;
        const movie = await movieModel.create(data);
        return res.status(201).json(movie);
        
    } catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
    }
}

export default createMovie