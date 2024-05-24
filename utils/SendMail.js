import  nodemailer from 'nodemailer'
import { config } from 'dotenv'
config()
const sendMail = async(email, subject, message)=>{
    let tarnspoter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        port:process.env.MAIL_PORT,
        secure:false,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASSWORD
        }
    })
    await tarnspoter.sendMail({
        from:process.env.ADMIN_EMAIL,
        to:email,
        subject:subject,
        html:message
    })
}
export default sendMail