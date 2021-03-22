import {Router} from 'express';
import { UserController } from './user-controller';

export function getRoutes() {
    const userController = new UserController();

    const router = Router();

    router.get('/api/users', userController.getAllUsers);
    router.get('/api/users/:id', userController.getUserById);

    return router;
}