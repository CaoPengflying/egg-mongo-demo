'use strict'

let Schema = require("mongoose").Schema;

const UserSchema = new Schema({
        name: {type: String},
        pwd: {type: String},
        age: {type: Number}
    }
)

/*UserSchema.pre('',function (next) {

    next();
})*/
