$require('passport/passport');

const router = require('express-promise-router')();
const authControllers = $require('http/controllers/auth');
const validation = $require('http/validations');
const validations = require('./validations');
const passport = require('passport');
const passportLocal = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false });
const validateCredentials = validation(validations.sign);

router
    .post('/signin', validateCredentials, passportLocal, authControllers.signIn);

router
    .post('/signup', validateCredentials, authControllers.signUp);

router
    .get('/user', passportJwt, authControllers.user);

module.exports = router;
