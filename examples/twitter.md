---
{
	"title":"Twitter",
	"secrets":[
		{"sg_key":"1111"},
		{"sg_token":"2222"}
	],
	"published":"5/7/2018"
}
---

# Twitter

## What is Twitter?

Twitter is a social network where interactions are limited to 244 characters. Twitter has a strong [developer ecosystem](https://developer.twitter.com/) supporting multiple different levels of API integrations. This includes creating tweets, reading tweets, and generic searches across the platform.

## Prereqs

To work with the Twitter API, sign in at [https://apps.twitter.com](https://apps.twitter.com). Create a new application (or use an existing one) and make note of the `consumer_key` and `consumer_secret`. Documentation about Twitter's API and policies may be found on their [developer site](https://developer.twitter.com). 

The sample code requires the following dependencies:

* npm module(s): twitter, request
* secrets: consumer_key, consumer_secret

## Code Sample

In the following example, a Twitter search is performed for a keyword and if any results are found, the code returns a reconstructed result set. (Reconstructed in that that results are trimmed significantly.)

<<< @/.vuepress/samples/twitter.js
