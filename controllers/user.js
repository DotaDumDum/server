const User = require('../model/user')
const { OAuth2Client } = require('google-auth-library')
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const { generateToken, verifyToken } = require('../helper/jwt')

class UserController {

    static register(req, res, next) {
        let { username, email, password } = req.body
        User.create({ username, email, password })
            .then((newUser) => {
                res.status(201).json(newUser)
            })
            .catch(next)
    }

    static manualLogin(req, res, next) {
        let { email, password } = req.body
        User.findOne({ email })
            .then((user) => {
                if (!user) {
                    next({
                        status: 400,
                        msg: 'username or password is wrong'
                    })
                } else if (user.password !== password) {
                    next({
                        status: 400,
                        msg: 'username or password is wrong'
                    })
                } else {
                    const payloadJwf = { id: user._id }
                    let token = generateToken(payloadJwf, process.env.SECRET_JWT)
                    res.status(200).json(token)
                }
            })
            .catch(next)
    }

    static googleLogin(req, res, next) {
        let payload = null
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket => {
                payload = ticket.getPayload()
                return User.findOne({ email: payload.email })
            })
            .then((user) => {
                if (user) {
                    return user
                } else {
                    return User.create({
                        username: payload.name,
                        email: payload.email
                    })
                }
            })
            .then((user) => {
                const payloadJwf = { id: user._id }
                let token = generateToken(payloadJwf, process.env.SECRET_JWT)
                res.status(200).json({ token, name: user.name })
            })
            .catch(next);
    }
}

module.exports = UserController
