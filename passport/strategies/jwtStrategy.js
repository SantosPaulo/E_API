const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { hashKey } = $require('configs/app').app;
const User = $require('models/user');

const jwtStrategy = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: hashKey
}, async (payload, done) => {
    try {

        const user = await User.findById(payload.sub);

        if (!user) return done(null, false);

        done(null, user);

    } catch (error) {
        done(error, false);
    }
});

module.exports = jwtStrategy;
