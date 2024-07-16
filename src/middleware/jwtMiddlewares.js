//////////////////////////////////////////////////////
// REQUIRE DOTENV MODULE
//////////////////////////////////////////////////////
require("dotenv").config();

//////////////////////////////////////////////////////
// REQUIRE JWT MODULE
//////////////////////////////////////////////////////
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(cookieParser());

//////////////////////////////////////////////////////
// SET JWT CONFIGURATION
//////////////////////////////////////////////////////
const secretKey = process.env.JWT_SECRET_KEY;

//////////////////////////////////////////////////////
// MIDDLEWARE FUNCTION FOR VERIFYING JWT TOKEN
//////////////////////////////////////////////////////
module.exports.verifyToken = (req, res, next) => {
    let token;

    // Check token in cookies
    if (req.cookies['auth_token']) {
        token = req.cookies['auth_token'];
    } 
    // Check token in Authorization header
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.substring(7);
    }

    if (!token) {
        return res.status(401).json({ error: 'Not Authenticated' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        res.locals.userId = decoded.userId;
        res.locals.role_id = decoded.role_id; 
        // Add neccesary infos
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};