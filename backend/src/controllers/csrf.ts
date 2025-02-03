import { Request, Response } from 'express'
import { generateToken } from '../middlewares/csrfProtection'

export const getCsrfToken = async (
    req: Request,
    res: Response
) => {
    const csrfToken = generateToken(req, res);
    res.send({
        csrfToken
    });
}

export default {}
