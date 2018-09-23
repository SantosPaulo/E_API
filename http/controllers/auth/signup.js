const generateToken = require('./helpers/jwt');
const User = $require('models/user');

const signUp = async (req, res) => {

    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    if (findUser) {
        return res.send({ message: 'That email is already taken.' });
    }
    
    const newUser = new User({ email, password });
    await newUser.save();

    const token = generateToken(newUser._id);

    return res.send({ token });
};

module.exports = signUp;
