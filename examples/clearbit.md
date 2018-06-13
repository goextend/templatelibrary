---
{
	"title":"ClearBit",
	"args":[
		{"cb_key":"1111"}
	],
	"published":"5/4/2018"
}
---

# ClearBit

## What is ClearBit?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante sit amet purus venenatis tristique et id tellus. Nunc sed dolor non est sollicitudin ornare. Maecenas ac dapibus sapien. Vivamus turpis nunc, auctor a imperdiet consectetur, venenatis quis odio. Phasellus tempor ultrices fermentum. Nunc ut ligula et mauris viverra rutrum. In hac habitasse platea dictumst. Pellentesque lacinia cursus erat, vel tristique leo maximus posuere. Curabitur in nibh nunc. Nulla convallis tortor id est lobortis dignissim. Phasellus et tristique justo, nec condimentum elit. Donec interdum maximus felis, quis lacinia nibh vestibulum vitae. Praesent viverra nisi eu luctus tempor.

## Prereqs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante sit amet purus venenatis tristique et id tellus. Nunc sed dolor non est sollicitudin ornare. Maecenas ac dapibus sapien. Vivamus turpis nunc, auctor a imperdiet consectetur, venenatis quis odio. Phasellus tempor ultrices fermentum. Nunc ut ligula et mauris viverra rutrum. In hac habitasse platea dictumst. Pellentesque lacinia cursus erat, vel tristique leo maximus posuere. Curabitur in nibh nunc. Nulla convallis tortor id est lobortis dignissim. Phasellus et tristique justo, nec condimentum elit. Donec interdum maximus felis, quis lacinia nibh vestibulum vitae. Praesent viverra nisi eu luctus tempor.

## Code Sample

The sample below demonstrates doing X when Y happens. It will then do Z and that is cool.

```js
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
				console.log('good response from sg');
				resolve();
			}
		});
	});

}
```