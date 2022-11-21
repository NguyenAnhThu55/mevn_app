const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController ={
    // register
    register: async (req, res) => {
        try{
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            const newUser =await new User({
                username: req.body.username,
                email: req.body.email,
                password:hashed,
            });
            const user = await newUser.save();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // LOGIN
    login: async (req, res) => {
        try{
            const user = await User.findOne({username:req.body.username});
            if(!user){
                res.status(404).json("Wrong username or password!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                res.status(404).json("Wrong username or password!");
            }

            if(user && validPassword){
                const accessToken = jwt.sign({
                    id: user.id,
                    admin: user.admin
                },
                process.env.JWT_ACCESS_TOKEN,
                {expiresIn: "365d"}
                )
                const {password,...others} = user._doc
                res.status(200).json({...others,accessToken});
            }
        }catch(err){
            res.status(500).json(err);
        }
    },
    // logout
    logout: async (req, res) => {
        res.status(200).json("Logout successfully");
    },
}

module.exports = authController;