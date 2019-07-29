const jwt = require('jsonwebtoken');
const configs = $require('configs/app');
const moment = require('moment');

const tokenGenerator = (userId, expiresIn) => {
    return jwt.sign({
        sub: userId,
        iat: Date.now(),
        exp: expiresIn
    }, configs.app.hashKey);
}

const generateToken = userId => {

    const expiresIn = moment().add(1, 'minute' /* 'hour' */).valueOf();
    const token = tokenGenerator(userId, expiresIn);
    
    return { token, expiresIn };
};

const generateRenewalToken = userId => {
    
    const renewalExpiresIn = moment().add(1, 'month').valueOf();
    const renewalToken = tokenGenerator(userId, renewalExpiresIn);
    
    return { renewalToken, renewalExpiresIn };
}

const generateTokens = (userId) => {

    const token = generateToken(userId);
    const renewalToken = generateRenewalToken(userId);

    return { token, renewalToken };
}

module.exports = {
    generateToken,
    generateRenewalToken,
    generateTokens
};
