const express = require('express');
const asyncHandler = require('../../middlewares/async');
const router = express.Router();
const { check, validationResult } = require('express-validator');


const auth = require("../../middlewares/auth");
const errorHandler = require('../../middlewares/error');
const User = require('../../models/User');
const sign_in = require('./sign_in');


//route GET    api/auth
//description  user route
//access       private
router.get('/', auth, asyncHandler( async(req, res) => {
    const user = await User.findById(req.user.id).select('-password')

    res.json(user)
    
}))

//route POST   api/auth
//description  login user
//access       public
router.post('/', [
    check('email', 'E-mail address is not valid.')
    .isEmail(),
    check('password', 'Please enter your password.')
    .not()
    .isEmpty()
], asyncHandler( async(req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new errorHandler(errors.array()[0].msg, 422))
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if ( !user ) {
        return next(new Error('Invalid credentials', 422))
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if ( !isMatch ) {
        return next(new Error('Invalid credentials', 422))
    }

    
    return sign_in(user, 200, res)
    

}));

//route GET    api/auth
//description  logout user
//access       private
router.get('/logout', auth, asyncHandler( async(req, res, next) => {
    const user = await User.findById(req.user.id);
    
    const options = {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true
    }
    res.cookie('token', 'none', options);


    res.json({ success: true, message: `${user.name} User logged out.` })
}))

module.exports = router;