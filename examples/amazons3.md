---
{
	"title":"Amazon S3",
	"args":[
		{"sg_key":"1111"},
		{"sg_token":"2222"}
	],
	"published":"6/18/2018"
}
---

# Amazon S3

## What is Amazon S3?

[SendGrid](https://sendgrid.com/) is an "all in one" email service, handling basic mail delivery as well as newsletter subscriptions. Their API allows you to easily send and receive mail over various delivery systems.

The [Pricing](https://sendgrid.com/pricing/) covers what it will cost you to make use of the service but note that there is a generous free tier.

## Prereqs

In order to use the API, you'll need a key. Sign up and retrieve your key here: [https://sendgrid.com/solutions/email-api/](https://sendgrid.com/solutions/email-api/).

The sample code requires the following dependencies:

* npm module(s): sendgrid
* secrets: sendgrid_key (key provided for your login)

## Code Sample

The sample below simply takes a new lead object and emails the values to an email address. It doesn't manipulate or change the values.

```js
const helper = require('sendgrid').mail;

const TO = 'jedimaster@auth0.com';
const FROM = 'jedimaster@auth0.com';
const SUBJ = 'New Lead Created';

module.exports = function(context, cb) {
	let lead = context.body;

	//Generate the text
	let date = new Date();
    let content = `
New Lead Created at ${date}
--------------------------------

`;

	for(let key in lead) {
		content += `
${key}:         ${lead[key]}
`;
    }
	
	//fire off the request to send an email - we don't want the user to wait so this is fire and forget
	sendEmail(TO,FROM,SUBJ,content, context.secrets.sendgrid_key)
	.then(() => {
		cb({});
	}).catch(e => {
		// handle error
	});

}

function sendEmail(to, from, subject, body, key, cb) {

	let to_email = new helper.Email(to);
	let from_email = new helper.Email(from);
    let mailContent = new helper.Content('text/plain', body);
    let mail = new helper.Mail(from_email, subject, to_email, mailContent);
	let sg = require('sendgrid')(key);

	var request = sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: mail.toJSON()
	});
        
	return new Promise((resolve, reject) => {
		sg.API(request, function(error, response) {
			if(error) {
				console.log(error.response.body);
				reject(error.response.body);
			} else {
				resolve();
			}
		});
	});

}
```

## Sample Output

As the example sends email, it has no specific output.