'use strict';


const {app, assert} = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
    it('should assert', () => {
        const pkg = require('../../../package.json');
        assert(app.config.keys.startsWith(pkg.name));

        // const ctx = app.mockContext({});
        // yield ctx.service.xx();
    });

    it('post /createUser should ok', () => {
        return app.httpRequest()
            .post('/createUser')
            .send({username: 'cpf', pwd: '123456'})
            .expect(200);
    });


});
