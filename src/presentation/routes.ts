import { Router } from 'express';
import { AuthRoutes } from './auth/routes';

export class AppRoutes{

    //Inyección de dependencias
    static get routes():Router{
        const router = Router();

        //aquí voy a definir mis rutas principales
        router.use('/api/auth', AuthRoutes.routes);

        return router;
    }
}