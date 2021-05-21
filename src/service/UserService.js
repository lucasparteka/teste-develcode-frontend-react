class UserService {

    constructor() {
        this.urlApiJobs = "http://localhost:4001/users";
    }

    async insertUser(user) {
        await fetch(this.urlApiJobs, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    }

    async listUsers() {
        let result = await fetch(this.urlApiJobs, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });
        return await result.json();
    }

    async editUser(user) {
        await fetch(this.urlApiJobs, {
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