// var jwt = require('jsonwebtoken');
// const secret = require('../config');

// const fetchuser = (req, res, next) => {
//     // Get the user from the jwt token and add id to req object
//     const token = req.header('authenticationToken');
//     if (!token) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }
//     try {
//         const data = jwt.verify(token, secret);
//         req.teacher = data.teacher;
//         next();
//     } catch (error) {
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }

// }


// module.exports = fetchuser;

var jwt = require('jsonwebtoken');
const secret = require('../config');

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('authenticationToken');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, secret);
        if (data.teacher) {
            req.teacher = data.teacher;
        }
        else {
            req.student = data.student;
        }
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;