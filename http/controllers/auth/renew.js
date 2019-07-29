const { generateTokens } = require('./helpers/jwt');

const renew = async (req, res) => {

    const jwt = generateTokens(req.user._id);

    return res.send(jwt);
};

module.exports = renew;
