const { generateToken } = require('./helpers/jwt');
const User = $require('models/user');

const signUp = async (req, res) => {

    const { name, email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser) {
        return res.send({ message: 'That email is already taken.' });
    }
    
    const newUser = new User({ name, email, password });
    await newUser.save();

    const jwt = generateToken(newUser._id);

    return res.send({
        token: jwt.token,
        expires_in: jwt.expiresIn
    });
};

module.exports = signUp;
