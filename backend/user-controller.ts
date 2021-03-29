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

    createUser = (req, res) => {
        const user = req.body;

        if (!user) {
            res.status(400).json({message: 'No user data defined.'});
            return;
        }

        user.id = this.idCounter++;

        this.users.push(user);
        res.json(user);
    }

    updateUser = (req, res) => {
        const user = req.body;

        for (const index in this.users) {
            if (user.id == this.users[index].id) {
                this.users.splice(parseInt(index), 1, user);
                res.json(user);
                return;
            }
        }

        res.status(404).json({ message: 'Cannot find user.'});
    }

    deleteUser = (req, res) => {
        const id = req.params.id;

        for (const index in this.users) {
            if (id == this.users[index].id) {
                this.users.splice(parseInt(index), 1);
                res.status(200).json({ message: 'Deleted user.' })
                return;
            }
        }

        res.status(404).json({ message: 'Cannot find user.'});
    }
}