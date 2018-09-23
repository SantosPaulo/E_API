const generateToken = require('./helpers/jwt');

const signIn = async (req, res) => {

    const token = generateToken(req.user._id);

    return res.send({ token });
};

module.exports = signIn;
