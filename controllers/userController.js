const users = require('../models/userModel')

//register
exports.registerController = async (req, res) => {
    console.log("Inside registerController");
    const { username, email, password } = req.body
    console.log(username, email, password);

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User ALready exist... Please Login!!!")
        } else {
            const newUser = new users({
                username,email,password,github:"",linkedin:"",profilePic:""
        })
        await newUser.save()
        }
    }
    catch (err) {
        res.status(401).json(err)        
    }
    
    // res.status(200).json("Request received!!!")
}

//login
exports.loginController = async (req, res) => {
    console.log("Inside loginController");
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            res.status(200).json({
                user: exsistingUser
            })
        } else {
            res.status(404).json("Invalid E Mail/Password")
        }
    }
    catch (err) {
        res.status(401).json(err)        
    }
    
    // res.status(200).json("Request received!!!")
}



//Profile updation