const User = $require('models/user');

const signIn = async (req, res) => {

    let user = await User.findById(req.user._id).select('-password');

    return res.send({ user });
};

module.exports = signIn;
