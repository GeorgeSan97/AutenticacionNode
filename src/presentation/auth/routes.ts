import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';

export class AuthRoutes{

    //Inyección de dependencias
    static get routes():Router{
        const router = Router();

        const datasource = new AuthDatasourceImpl();

        const authRepository = new AuthRepositoryImpl(datasource);

        const controller = new AuthController(authRepository);

        //aquí voy a definir mis rutas principales
        router.use('/login',(req,resp) => controller.loginUser(req,resp));
        router.use('/register', (req,res) => controller.registerUser(req,res)); 

        return router;
    }
}