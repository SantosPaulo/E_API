const { generateTokens } = require('./helpers/jwt');
const User = $require('models/user');

const signUp = async (req, res) => {

    const { name, email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser) {
        return res.send({ message: 'That email is already taken.' });
    }
    
    const newUser = new User({ name, email, password });
    await newUser.save();

    const jwt = generateTokens(newUser._id);

    return res.send({
        token: jwt.token.token,
        expires_in: jwt.token.expiresIn,
        renewal_token: jwt.renewalToken.token,
        renewal_expires_in: jwt.renewalToken.expiresIn
    });
};

module.exports = signUp;
