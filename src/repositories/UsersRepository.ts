import User from "../models/User";

interface CreateUserDTO {
    username :string;
    email: string;
    password: string;
}
class UsersRepository {

    constructor() {

    }

    public create({username, email, password, posts}: User) {
        const entry = new User({username, email, password, posts});

        //

        return entry;
    }

    public getAll(): User[] {
        const users: User[] = [];

        return users;
    }
}

export default UsersRepository;
