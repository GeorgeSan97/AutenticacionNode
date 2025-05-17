import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain";

export class AuthController{
    //aquí sí aplicaré inyección de dependencias}
    constructor() {}
    
    //controladores de la rut
    //register
    registerUser = (req: Request, res: Response ) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if( error )  res.status(400).json({error});

        res.json(registerUserDto);
    }


    //login
    loginUser = (req: Request, res: Response ) => {
        res.json('loginUser controller');
    }
}