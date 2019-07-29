const jwt = require('jsonwebtoken');
const configs = $require('configs/app');

const checkToken = (req,res,next) => {

    const token = req.body.token || req.query.token || req.headers['authorization'];

    if (token) {

        jwt.verify(token, configs.app.hashKey, (err, decoded) => {

            if (decoded.exp < new Date().getTime()) {
                return res.status(423).json({
                    'error': true,
                    'message': 'Token expired, Unauthorized access.'
                });
            }

            if (err) {
                return res.status(401).json({
                    'error': true,
                    'message': 'Unauthorized access.'
                });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
    }
}

module.exports = checkToken;
