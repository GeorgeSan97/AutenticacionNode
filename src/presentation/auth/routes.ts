import { Router } from 'express';
import { AuthController } from './controller';

export class AuthRoutes{

    //Inyección de dependencias
    static get routes():Router{
        const router = Router();

        const controller = new AuthController();

        //aquí voy a definir mis rutas principales
        router.use('/login',(req,resp) => controller.loginUser(req,resp));
        router.use('/register', (req,res) => controller.registerUser(req,res)); 

        return router;
    }
}