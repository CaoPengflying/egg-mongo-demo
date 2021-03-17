const Controller = require("egg").Controller

class User extends Controller {
    async create() {
        const {ctx} = this;
        ctx.body = "create success";
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
