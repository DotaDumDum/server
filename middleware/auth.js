const { verifyToken } = require('../helper/jwt')

module.exports = {
    authentication: (req, res, next) => {

        try {
            let decodedToken = verifyToken(req.headers.access_token)
            req.decode = decodedToken
            next()
        }
        catch (err) {
            next(err)
        }
    },

    authorization: (req, res, next) => {

    }
}