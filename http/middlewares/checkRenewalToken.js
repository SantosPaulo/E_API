const jwt = require('jsonwebtoken');
const configs = $require('configs/app');

const checkRenewalToken = (req,res,next) => {

    const token = req.body.token || req.query.token || req.headers['x-renewal-token'];

    if (token) {

        jwt.verify(token, configs.app.hashKey, (err, decoded) => {

            if (decoded.exp < new Date().getTime()) {
                return res.status(423).json({
                    'error': true,
                    'message': 'Renewal token expired.'
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
            "message": 'No renewal token expired.'
        });
    }
}

module.exports = checkRenewalToken;
