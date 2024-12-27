const express = require('express');
const router = express.Router();
const {handelUserCreation,handelLoginInfo,CheckUserAuth,userLogOut} = require('../controller/user')


router.post('/userCreate',handelUserCreation);
router.post('/getuser',handelLoginInfo)
router.get('/check-auth',CheckUserAuth);
router.post('/logout',userLogOut);

module.exports = router;