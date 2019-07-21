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

    return res.send(jwt);
};

module.exports = signUp;
