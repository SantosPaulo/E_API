const jwt = require('jsonwebtoken');
const configs = $require('configs/app');

const generateToken = userId => {
    const token = jwt.sign({
        sub: userId,
        iat: Date.now(),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, configs.app.hashKey);
    return token;
};

module.exports = generateToken;
