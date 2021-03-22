import { getMaxListeners } from "node:process"

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

export class UserController {

    private idCounter: number = 3;
    private users: User[] = [
        {
            id: 1,
            firstName: 'Johnny',
            lastName: 'Cash',
            age: 80,
            email: 'apropenzjani@gmail.com'
        },
        {
            id: 2,
            firstName: 'Marika',
            lastName: 'Fekete',
            age: 15,
            email: 'blackmary@gmail.com'
        }
    ]

    getAllUsers = (req, res) => {
        res.json(this.users);
    }

    getUserById = (req, res) => {
        const id = req.params.id;

        for (const user of this.users) {
            if (user.id == id) {
                res.json(user);
                return;
            }
        }
        
        res.status(404).json({ message: 'User not found.'});
    }
}