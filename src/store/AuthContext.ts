import { createContext } from 'react';

import User from '../models/user';

export type AuthContextType = {
    users: User[],
    loggedInUser: string,
    login: (username: string) => void,
    logout: () => void,
    addUser: (newUser: User) => void,
    isLoggedIn: boolean,
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;