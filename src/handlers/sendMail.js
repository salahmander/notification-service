import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "eu-west-1" });

async function sendMail(event, context) {
  const params = {
    Source: "salahabdo@hotmail.co.uk",
    Destination: {
      ToAddresses: ["ylimes71@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Salah!",
        },
      },
      Subject: {
        Data: "Test Mail",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
