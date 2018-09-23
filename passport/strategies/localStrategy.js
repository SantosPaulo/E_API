const LocalStrategy = require('passport-local').Strategy;
const User = $require('models/user');

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {

        const user = await User.findOne({ email });

        if (!user) return done(null, false);

        const passwordIsValid = await user.isValidPassword(password);

        if (!passwordIsValid) return done(null, false);

        done(null, user);

    } catch (error) {
        done(error, false);
    }
});

module.exports = localStrategy;
