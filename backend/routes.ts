import {Router} from 'express';
import { UserController } from './user-controller';

export function getRoutes() {
    const userController = new UserController();

    const router = Router();

    router.get('/api/users', userController.getAllUsers);
    router.get('/api/users/:id', userController.getUserById);
    router.post('/api/users', userController.createUser);
    router.put('/api/users', userController.updateUser);
    router.delete('/api/users/:id', userController.deleteUser);

    return router;
}