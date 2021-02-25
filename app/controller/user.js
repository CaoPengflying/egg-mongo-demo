const Controller = require("egg").Controller

class User extends Controller {
    async create() {
        const {ctx, service} = this;
        const userCreateRule = {
            userName: {type: 'string'},
            pwd: {type: 'string'}
        }
        ctx.validate(userCreateRule);
        // 调用 Service 进行业务处理
        const res = await service.user.create(req.body);
        // 设置响应内容和响应状态码
        ctx.body = {id: res.id};
        ctx.status = 200;
    }

    async get() {
        const {ctx, service} = this;
        // 调用 Service 进行业务处理
        const res = await service.user.getUserByName(ctx.query.name);
        // 设置响应内容和响应状态码
        ctx.body = res;
        ctx.status = 200;
    }

}

module.exports = User
