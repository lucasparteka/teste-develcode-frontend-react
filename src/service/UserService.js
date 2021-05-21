class UserService {

    constructor() {
        this.urlApiUsers = process.env.REACT_APP_URL_API + "/users" || "http://localhost:4001/users";
    }

    async insertUser(user) {
        await fetch(this.urlApiUsers, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    }

    async listUsers() {
        let result = await fetch(this.urlApiUsers, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });
        return await result.json();
    }

    async editUser(user) {
        await fetch(this.urlApiUsers, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }

}

export default UserService;