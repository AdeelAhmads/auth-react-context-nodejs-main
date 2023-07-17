const nodemailer = require("nodemailer");
const createMailTransporter = () => {
    console.log("password");
    console.log(process.env.EMAIL_PASS);
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "youremail@outlook.com",
            pass: "yourpassword",
        }
    })
    return transporter;
};
module.exports = { createMailTransporter };