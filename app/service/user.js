const Service = require("egg").Service;


class UserService extends Service {

    async getUserByName(name) {
        const query = {
            name: name
        }
        const user = this.ctx.model.User.findOne(query).exec()
        console.log(user)
        return user
    }
}

module.exports = UserService
