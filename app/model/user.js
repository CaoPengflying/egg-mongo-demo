'use strict'

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
            name: {type: String},
            org_no: {type: String},
            age: {type: Number}
        },{collection:"user"}
    )
    return mongoose.model('User', UserSchema);
}


/*UserSchema.pre('',function (next) {

    next();
})*/
