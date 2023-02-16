const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')
const { registerCheck, loginCheck,validator } = require('../middlewares/validator')
//register new user

router.post("/register", registerCheck(), validator, async (req, res) => {
        const { email, password, role } = req.body
        try {
            if (role) {
                return res.status(401).send({ msg: "not auth !!" })
            }
            const existUser = await User.findOne({ email })
            if (existUser) {
                return res.status(400).send({ msg: "user exist ,please login" })
            }
            const newUser = new User(req.body)
            const hashedPassword = await bcrypt.hash(password, 10)
            //console.log(hashedPassword);
            newUser.password = hashedPassword
            //console.log(hashedPassword);
            //const newUser2 = { ...newUser, password: hashedPassword } errorrrrrrrrrrrrrrrrrrrrrrrrr
            await newUser.save()
            res.send({ msg: "user added successfuly", user: newUser })
        } catch (error) {
            console.log(error);
        }
    })

//login user 

router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
    }
})

// get current user ==>private

router.get("/current", isAuth(), (req, res) => {
    res.send({ user: req.user });
})

//get All User  ==>protected
router.get("/", isAuth(), isAdmin, async (req, res) => {
    try {
        const users = await User.find()
        res.send({ users })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message });
    }

})
module.exports = router