const { generateTokens } = require('./helpers/jwt');

const signIn = async (req, res) => {

    const jwt = generateTokens(req.user._id);

    return res.send(jwt);
};

module.exports = signIn;
