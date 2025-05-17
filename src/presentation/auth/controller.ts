import { Request, Response } from "express"
import { AuthRepository, RegisterUserDto } from "../../domain";

export class AuthController{
    //aquí sí aplicaré inyección de dependencias}
    constructor(
        private readonly authRepository: AuthRepository,
    ) {}
    
    //controladores de la rut
    //register
    registerUser = (req: Request, res: Response ) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if( error )  res.status(400).json({error});

        this.authRepository.register(registerUserDto!)
            .then( user => res.json(user) )
            .catch( error => res.status(400).json({error}) );
    }


    //login
    loginUser = (req: Request, res: Response ) => {
        res.json('loginUser controller');
    }
}