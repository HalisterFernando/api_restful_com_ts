import { Router, Request, Response } from "express";

const router = Router()

export default router.get('/teste', (req: Request, res: Response) => {
    res.status(200).send('Api is working!!!')
})