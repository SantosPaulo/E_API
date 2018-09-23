const passport = require('passport');
const jwtStrategy = $require('passport/strategies/jwtStrategy');
const LocalStrategy = $require('passport/strategies/localStrategy');

passport.use(jwtStrategy);
passport.use(LocalStrategy);
