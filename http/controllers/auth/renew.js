const { generateTokens } = require('./helpers/jwt');

const renew = async (req, res) => {

    const jwt = generateTokens(req.decoded.sub);

    return res.send(jwt);
};

module.exports = renew;
