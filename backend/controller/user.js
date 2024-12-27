const { default: mongoose } = require('mongoose');
const userUrl = require('../models/user');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');


const { setUser, getuser } = require('../services/services');
const { use } = require('../router/user');

async function handelUserCreation(req, res) {

    const body = req.body;

    console.log("Body-->", body);
    if (!body || !body.userName || !body.userEmail) return res.status(400).json({ error: "Please Give Correct Value" })

    try {

        const newUser = await userUrl.create({
            userName: body.userName,
            userEmail: body.userEmail,
            userMobile: body.userMobile,
            userPassword: body.userPassword,
            latitude: body.latitude,
            longitude: body.longitude
        })

        res.send({
            msg: "Success",
            id: newUser._id
        });
    } catch (error) {
        res.status(400).json({ error: "internal server error" })
    }
}


async function handelLoginInfo(req, res) {
    const { userEmail, userPassword } = req.body;

    console.log("body-->", req.body);

    if (!req.body || !userEmail || !userPassword) return res.status(400).json({ msg: "Please Give Email And Password Correctly" })

    try {

        const loginUser = await userUrl.findOne({ userEmail: userEmail });
        if (!loginUser) {
            return res.status(404).json({ msg: "User Not Found" })
        }

        console.log("loginuser-->", loginUser);
        if (userPassword != loginUser.userPassword) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }



        const sessionId = uuidv4();
        console.log(sessionId);
        setUser(sessionId, loginUser);
        res.cookie('sessionId', sessionId, {
            httpOnly: true, // Secure, not accessible via client-side JavaScript
            secure: false, // Set to true in production with HTTPS
            sameSite: 'lax', // Allows cookies across different domains in some cases
            maxAge: 3600000, // 1 hour
        });
        return res.status(200).json({
            msg: "Log in Success",
            user: getuser(sessionId)
        })

    }
    catch (error) {
        console.log("Error-->", error);
    }
}



async function CheckUserAuth(req, res) {

    try {

        const userSession = req.cookies.sessionId;
        console.log("id->", userSession);
        if (!userSession) {
            return res.status(401).json({ msg: "Not Authenticated" })
        }
        const user = getuser(userSession);
        if (!user) {
            return res.status(401).json({ msg: "Not Authenticated" })
        }

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
    }

}


async function userLogOut(req, res) {
    try {
        req.session.destroy(err => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).send({ msg: "Logout Failed" });
            }

            res.clearCookie('sessionId');
            return res.status(200).send({ msg: "Logout Successful" });
        });
    } catch (error) {
        console.error("Error in userLogOut:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
}




module.exports = { handelUserCreation, handelLoginInfo, CheckUserAuth,userLogOut}