const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        validate: [
            {
                validator: function (value) {
                    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailRegex.test(value);
                },
                message: props => `${props.value} is not a valid email!`
            },
            {
                validator: function (value) {
                    return this.model('Member').findOne({ email: value })
                        .then(email => {
                            if (email) {
                                return false
                            } else {
                                return true
                            }
                        })
                },
                message: props => `${props.value} has already been used by another user`
            }
        ],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        default: 'PASSWORD'
    },
    favoriteHeros: Array
})

const User = mongoose.model('User', UserSchema);

module.exports = User;