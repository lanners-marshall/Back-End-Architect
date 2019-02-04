const knex = require('knex');
const env = require('dotenv').config()
const db = require('../../dbConfig')
const jwt = require('jsonwebtoken')
module.exports = {
    lock: function(req,res,next){
        const token = req.headers.authorization;
            if (token) {
                jwt.verify (token, process.env.JWT_SECRET, (err, decodedToken) => {
                    if (err) {
                        res.status (401).json ({message: 'invalid token'});
                    }else {
                        req.decodedToken = decodedToken;
                        next ();
                    }
                });
            } else {
                res.status (401).json ({
                    message: 'missing token',
                    });
                }

    },
    generateToken: function(user){
        const payload = {
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            userImgUrl: user.userImgUrl
        }
        const secret = process.env.JWT_SECRET
        const options = {
            expiresIn: '45m',
        }
        return jwt.sign(payload, secret, options)
    }
}