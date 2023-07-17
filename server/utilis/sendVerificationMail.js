const { createMailTransporter } = require("./createMailTransporter")
const sendVerificationMail = (user) => {
    const transporter = createMailTransporter();
    // console.log(user);
    const mailOptions = {
        from: '"Chatt App" <adeelKfueit@outlook.com>',
        to: user.email,
        subject: "Verify your email...",
        html: `<p>Hello${user.name}, verify your email by clicking this link...</p>
     <a href='http://localhost:5173/verify-email?emailToken=${user.emailToken}'>Verify Your 
     Email</a>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            console.log("Verification email sent");
        } else {
            console.log('Email sent successfully');
        }
    });
};
module.exports = { sendVerificationMail };