const nodemailer = require('nodemailer')
const mail = (req, res) => {
    const {userEmail}  = req.body
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            password: process.env.PASS
        }
    }
    res.send("Post server")
    let transporter = nodemailer.createTransport(config)

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Verify Your Email || Anchors Hub",
        body: `${Math.random()}`
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg:"otp sent successfully"
        })
    }).catch((err) => {
        res.status(400).json({
            msg:err
        })
    })
}
module.exports = mail