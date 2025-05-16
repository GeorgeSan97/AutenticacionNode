import { Request, Response } from "express"

export class AuthController{
    //aquí sí aplicaré inyección de dependencias}
    constructor() {}
    
    //controladores de la rut
    //register
    registerUser = (req: Request, res: Response ) => {
        res.json('registerUser controller');
    }

    //login
    loginUser = (req: Request, res: Response ) => {
        res.json('loginUser controller');
    }
}