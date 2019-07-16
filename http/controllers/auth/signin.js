const { generateToken } = require('./helpers/jwt');

const signIn = async (req, res) => {

    const jwt = generateToken(req.user._id);

    return res.send({
        token: jwt.token,
        expires_in: jwt.expiresIn
    });
};

module.exports = signIn;
