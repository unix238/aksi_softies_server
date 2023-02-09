const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({message: "No token, authorization denied"});
        }
        const decodedData = jwt.verify(token, SECRET);
        req.user = decodedData;
        next();
    } catch(e) {
        console.log(e);
        return res.status(400).json({message: "Error in authMiddleware"});
    }
}

module.exports = authMiddleware;