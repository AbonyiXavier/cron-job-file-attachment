

const sendEmailReport = require('./reportSender');

// const sendVerificationEmail = require('./reportSender');

// var cron = require('node-cron');
// cron.schedule('* * * * *', () => {
    //     sendVerificationEmail("xavierfrancis174@gmail.com");
    // });

    // if attaching an existing file from your folder
//  const fs = require("fs");
// pathToAttachment = `${__dirname}/file/test-parameters.xlsx`;
// attachment = fs.readFileSync(pathToAttachment).toString("base64");

let file = "file/test-parameters.xlsx"


var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
  sendEmailReport(file)
//   sendVerificationEmail("addReceiverMail"); // when using sendgrid as the transporter

}, null, true, 'America/Los_Angeles');
job.start();