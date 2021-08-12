const router = require('express').Router();
//Import Models
const User = require('../models/user');

router.post('/register', async (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    const user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    try {
        let iuser = await user.save();
        res.send(iuser);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;