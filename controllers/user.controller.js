const User = require('../models/user')

module.exports = {
    getAllUser: async(req,res) => {
        const users = await User.find()

        res.json({
            message: "Berikut daftar user",
            data: users
        })
    },
}