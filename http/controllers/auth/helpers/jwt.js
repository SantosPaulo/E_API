const jwt = require('jsonwebtoken');
const configs = $require('configs/app');

const generateToken = userId => {

    const expiresIn = Math.floor(Date.now() / 1000) + (60 * 60);

    const token = jwt.sign({
        sub: userId,
        iat: Date.now(),
        exp: expiresIn
        // exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, configs.app.hashKey);
    
    return { token, expiresIn };
};

const generateRenewalToken = userId => {

}

module.exports = {
    generateToken,
    generateRenewalToken
};
