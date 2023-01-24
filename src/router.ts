import { Router, Request, Response } from "express";
import createMovie from "./contollers/Movie";
import validate from "./middlewares/handleValidaton";

const router = Router()

export default router.get('/teste', (req: Request, res: Response) => {
    res.status(200).send('Api is working!!!')
}).post('/movie', validate, createMovie)