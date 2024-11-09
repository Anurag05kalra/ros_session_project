// console.log("project started.")
// let a =45;
// let b=12;
// console.log(a+b);

//sendEmail

const mailer = require("nodemailer")

let transport = mailer.createTransport({

    service : 'gmail',
    auth:{
          user: 'codersworld00@gmail.com',
          pass: 'opqa cebl jqca uvtq'
    }
})
 let messageOb = {
      from: 'codersworld00@gmail.com',
      to: 'kalraanurag05@gmail.com',
      subject: 'Email Using Node JS',
      text: 'This email is send using node js',
};
transport.sendMail(messageOb,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Email sent")
        console.log(info.response)
    }
})
