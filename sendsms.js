const accountSid = 'AC4fd3b1b1829b3f4f21463b064a4ead7f';
const authToken = 'a153f9e5a528ac72052849de519cfe4c';
const client = require('twilio')(accountSid, authToken);
function sendSms(sendTo) {
    client.messages
      .create({
         body: 'Your table is ready!',
         from: '+15616669846',
         to: sendTo
       })
      .then(message => console.log(message.sid));
}

sendSms("12529438275");