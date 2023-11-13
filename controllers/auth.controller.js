require("dotenv").config()
const jwt = require("jsonwebtoken")
const User = require("../models/user")

module.exports = {
  login: async(req, res) => {
    const data = req.body

    const { username, 
            email, 
            password 
          } = data;

    if (!username || !email || !password) {
        return res.status(400).json({message: "all fields are required"});
    }

    try {
        const user = await User.findOne({ email: data.email });

        if (!user) throw new Error("invalid user")

        if(user.username !== data.username) throw new Error("invalid error")
        if(user.password !== data.password) throw new Error("invalid password")

        const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)
        res.json({
            message: "login succesful",
            userId: user._id,
            token,
        })
    } catch(error){
        res.json(error.message)
    }
  },

  register: async (req, res) => {
   let data = req.body
    
   const { name,
           username, 
           email, 
           password 
         } = data;

   if ( !name || !username || !email || !password ){
    return res.status(400).json({message: "all fields are required"});
   }

   try {
    const user = await User.create(data)

    res.status(200).json({
        message: "Congratulations, your account has been successfully created",
        data: user,
    });
   } catch (error){
    res.status(500).json({
        message: "Your account has failed to create",
        error: error.message,
    })
   }
  }
}
