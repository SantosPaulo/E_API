const { generateTokens } = require('./helpers/jwt');

const signIn = async (req, res) => {

    const jwt = generateTokens(req.user._id);

    return res.send({
        token: jwt.token.token,
        expires_in: jwt.token.expiresIn,
        renewal_token: jwt.renewalToken.token,
        renewal_expires_in: jwt.renewalToken.expiresIn
    });
};

module.exports = signIn;
