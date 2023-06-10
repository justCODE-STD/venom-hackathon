
// Importing the email sender module
const nodemailer = require('nodemailer');

async function SendEmail (emailToBeSentTo, code) {
    // Create a Transport system
    const Transport =  nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.sender,
            pass: process.env.pass
        }
    });

    // Mail Information
    const mailOptions = {
        from: process.env.sender,
        to: emailToBeSentTo,
        subject: '--Venom App--',
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
            /* Inline styles for compatibility */
            body {
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.5;
              margin: 0;
              padding: 0;
            }
        
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f7f7f7;
              border-radius: 5px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
        
            h1 {
              font-size: 28px;
              color: #333;
              margin-bottom: 20px;
            }
        
            p {
              margin-bottom: 10px;
              color: #555;
            }
        
            .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              text-decoration: none;
              border-radius: 4px;
            }
        
            .button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>--Venom--</h1>
            <p>Hello, There</p>
            <p>Welcome to Venom we are happy to meet you</p>
            <p>!!This is you OTSIC<br>Do not disclose this code: ${code}!!</p>
            <p>
              <a href="#" class="button">Link to Website</a>
            </p>
            <p>Regards,</p>
            <p>Venom</p>
          </div>
        </body>
        </html>
        `
    };

    // Send mail
    Transport.sendMail(mailOptions, (err, data) => {
        if (err) {
            return false
        }
        return true
    })
}

// Exporting the Function
module.export = {
    Mail: SendEmail
}