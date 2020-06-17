const Service = require("egg").Service;


class UserService extends Service {
    async create() {

    }

    async get(name) {
        const query = {
            name: name
        }
        return this.ctx.model.User.find(query).exec()
    }
}
