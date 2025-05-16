import { Router } from 'express';

export class AuthRoutes{

    //Inyección de dependencias
    static get routes():Router{
        const router = Router();

        //aquí voy a definir mis rutas principales
        router.use('/login',(req,res) =>{
            res.json('Login');
        });

        
        router.use('/register', (req,res) =>{
            res.json('Register');
        });;

        return router;
    }
}