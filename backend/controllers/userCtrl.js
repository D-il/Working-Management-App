const User = require('../models/userModel.js');

const createUser = (async(req, res) => {
    const { Username, Password, email, Todos} = req.body;

    const newUser = new User({
        Username,
        Password,
        email,
        Todos

    });

    await newUser.save()
    .then(() => {
        res.status(201).json({ message: 'Customer Created Successfully'})
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ message:'Customer Creation Failed'})
    })
})
module.exports = {createUser};