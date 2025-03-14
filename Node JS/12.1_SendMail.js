const nodemailer = require("nodemailer"); 

const sendMail = async (req , res)=>{
    let testAccount = await nodemailer.createTestAccount(); 

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ivah.lowe71@ethereal.email',
            pass: 'qzPDcBd9BjCYUMWK51'
        }
    });
    let info = await transporter.sendMail({
        from : "Vinod Thapa <thapa@gmail.com>", 
        to: "iamthapatechnical@gmail.com", 
        subject : "hello thapa", 
        text: "hello thapa", 
        html : "<b>Thapa technical</b>"
    });
    
    console.log("mesage sent : %s", info.message);
    res.json(info); 
};

module.exports = sendMail ;
