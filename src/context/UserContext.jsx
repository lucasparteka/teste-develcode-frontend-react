import React, { createContext, useEffect, useState } from "react";
import UserService from "../service/UserService";

const UserContext = createContext({});

const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        listUsers()
    }, [])

    const insertUser = async (user) => {
        let userService = new UserService();
        await userService.insertUser(user);
        await listUsers();
    };

    const listUsers = async () => {
        let userService = new UserService();
        let users = await userService.listUsers();
        setUsers(users);
    };

    const editUser = async (user) => {
        let userService = new UserService();
        await userService.editUser(user);
        await listUsers();
    }

    return (
        <UserContext.Provider value={{ users, insertUser, listUsers, editUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
