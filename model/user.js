const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'usrename is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        default: 'PASSWORD'
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;