// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey("yourKey");
// const fs = require("fs");


// this commented code works for send grid
// pathToAttachment = `${__dirname}/file/test-parameters.xlsx`;
// attachment = fs.readFileSync(pathToAttachment).toString("base64");

  // const sendVerificationEmail = (email) => {
  //   const msg = {
  //     to: email,
  //     from: "TheEmail",
  //     subject: "Hello from cron job",
  //     html : "my report",
  //     attachments: [
  //       {
  //         content: attachment,
  //         filename: "test-parameters.xlsx",
  //         type: "application/xlsx",
  //       //   type: "application/pdf", for pdf files
  //         disposition: "attachment"
  //       }
  //     ]
  //   };
    
  //   //ES6
  //   sgMail
  //     .send(msg)
  //     .then(() => {}, error => {
  //       console.error(error);
     
  //       if (error.response) {
  //         console.error(error.response.body)
  //       }
  //     });
  // }
  
  // module.exports = sendVerificationEmail;

  // Code nodemailer
  const nodemailer = require('nodemailer');
  require('dotenv').config();

  async function sendEmailReport(filepath) {
    try {
  
      let transporter = await nodemailer.createTransport({
          host:process.env.SMTP_HOST,
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
              user: Process.env.SMTP_USER, // generated ethereal user
              pass: process.env.SMTP_PASS // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
        }
      });
  
      let date = new Date().toDateString();
  
      // send mail with defined transport object
      let info = await transporter.sendMail({
          from: '"anyname" <AddYourEmailAddress>', // sender address
          to: "ToReceiverEmailHere", // list of receivers 
          subject: "anyname Transaction Report for " + date, // Subject line
          text: "Hi, Download bla bla bla transaction report for " + date,
          attachments: [{
              path: filepath
          }]
      });
  
      
      return info;
    } catch (error) {
      console.log("error", error)
    }

}

module.exports = sendEmailReport;