---
{
	"title":"Twitter",
	"args":[
		{"sg_key":"1111"},
		{"sg_token":"2222"}
	],
	"published":"5/7/2018"
}
---

# Twitter

## What is Twitter?

SendGrid is an email service. Blah blah blah.

## Prereqs

You need a trial account at X, and then a key Y.

## Code Sample

The sample below demonstrates doing X when Y happens. It will then do Z and that is cool.

```js
'use strict';

const helper = require('sendgrid').mail;
console.log('helper?', JSON.stringify(helper));
const RECIPS = ["raymondcamden@gmail.com","ray@camdenfamily.com"];

module.exports = function(context, req, res) {
	//first, gather the form fields
	let form = context.body;

	let from = RECIPS[0];
	let to = RECIPS[0];

	//let the form specify a from
	if(form._from) {
		from = form["_from"];
	}

}

function sendEmail(to, from, subject, body, key, cb) {
}
```