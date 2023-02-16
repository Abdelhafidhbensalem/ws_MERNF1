const { check, validationResult } = require("express-validator")


const registerCheck = () => [
    check("email", "this field should be a valid email").isEmail(),
    check("password", "password should have at least 6 characters").isLength({ min: 6 }),
    check("name", "not empty").notEmpty()
]

const loginCheck = () => [
    check("email", "this field should be a valid email").isEmail(),
    check("password", "password should have at least 6 characters").isLength({ min: 6 })
]

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports={registerCheck,loginCheck,validator}