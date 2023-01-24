import { Request, Response } from 'express'
import  movieModel  from '../models/Movie';
import Logger from '../../config/logger';


async function createMovie(req: Request, res: Response) {
    return res.status(200).send('Deu bom')
}

export default createMovie