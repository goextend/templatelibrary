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

[ClearBit](https://clearbit.com/) provides information about people and companies via a simple to use API. ClearBit provides multiple different services, but in this example we'll focus on the [Enrichment](https://clearbit.com/enrichment) endpoint. It takes a simple email address and from that attempts to retrieve as much information as possible about the data. 

The [Pricing](https://clearbit.com/pricing) page contains important details about the costs involved in using the API.

## Prereqs

In order to use the API, you'll need a key. Sign up and retrieve your key here: [https://dashboard.clearbit.com/api](https://dashboard.clearbit.com/api).

The sample code requires the following dependencies:

* npm module(s): clearbit
* secrets: clearbit_key (key provided for your login)

## Code Sample

The sample below shows using the ClearBit Enrichment API to find details about a new lead's email address. The API returns a `person` and `company` object, both of which will be added to the lead and returned.

```js
/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  let lead = context.body;
  let clearbit = require('clearbit')(context.secrets.clearbit_key);
  
  clearbit.Enrichment.find({email: lead.email, stream: true})
  .then(function (response) {
    lead.clearbit = { person:response.person, company:response.company };
    cb(null, { lead });

  })
  .catch(function (err) {
    console.error(err);
  });
  
};
```

## Sample Output

This example was tested with the following input:

```js
{
  "email":"billg@microsoft.com"
}
```

And this was the result:

```js
{
  "lead": {
    "email": "billg@microsoft.com",
    "clearbit": {
      "person": {
        "id": "e65c0e6e-77f0-44e7-98e2-f40fad9ad718",
        "name": {
          "fullName": "Bill Gates",
          "givenName": "Bill",
          "familyName": "Gates"
        },
        "email": "billg@microsoft.com",
        "location": "Seattle, WA, US",
        "timeZone": "America/Los_Angeles",
        "utcOffset": -7,
        "geo": {
          "city": "Seattle",
          "state": "Washington",
          "stateCode": "WA",
          "country": "United States",
          "countryCode": "US",
          "lat": 47.6062095,
          "lng": -122.3320708
        },
        "bio": null,
        "site": null,
        "avatar": null,
        "employment": {
          "domain": "microsoft.com",
          "name": "Microsoft",
          "title": "Co-founder",
          "role": "founder",
          "seniority": "executive"
        },
        "facebook": {
          "handle": null
        },
        "github": {
          "handle": null,
          "id": null,
          "avatar": null,
          "company": null,
          "blog": null,
          "followers": null,
          "following": null
        },
        "twitter": {
          "handle": null,
          "id": null,
          "bio": null,
          "followers": null,
          "following": null,
          "statuses": null,
          "favorites": null,
          "location": null,
          "site": null,
          "avatar": null
        },
        "linkedin": {
          "handle": "in/williamhgates"
        },
        "googleplus": {
          "handle": null
        },
        "gravatar": {
          "handle": null,
          "urls": null,
          "avatar": null,
          "avatars": []
        },
        "fuzzy": false,
        "emailProvider": false,
        "indexedAt": "2018-06-06T11:12:10.088Z"
      },
      "company": {
        "id": "6227df49-e4a8-4223-8f5e-f7e12289f4b3",
        "name": "Microsoft",
        "legalName": "Microsoft Corporation",
        "domain": "microsoft.com",
        "domainAliases": [
          "greatplainsinteract.info",
          "microsoftservice.us",
          "microsoft-anitfraud.com",
          "bingnetworks.com.cn",
          "launchkit.ca",
          "bingandgetnoticed.com",
          "surface.com",
          "microsoftsecurityupdates.com",
          "hyper-v.gr",
          "yahoobingnetwork.com.mx",
          "microsoft360.net",
          "microsoftisapiredir.com",
          "swiftkey.net",
          "makewhatsnext.eu",
          "makewhatsnext.com",
          "buildabetterwebsite.com",
          "microsoft-anitfraud.info",
          "microlsoft.com",
          "microsoftpatch.org",
          "bingads.com",
          "microsoftphilanthropy.com",
          "connectingthefilm.com",
          "microsofft.com",
          "bingads.co.uk",
          "microsofst.com",
          "maluuba.com",
          "azure.com",
          "microsoft.co",
          "microsoftproductionstudios.com",
          "mictrosoft.com",
          "bingyahoonetwork.tw",
          "dynamics2012.ru",
          "microsost.com",
          "livecalendar.co.uk",
          "windows.com",
          "microsoft.ca",
          "microsot.com",
          "internetofyourthings.com",
          "windowsazure.com",
          "storageexplorer.com",
          "grandrapidsmicrosofttraining.com",
          "answerdesk.com",
          "hololens.com",
          "modern.ie",
          "microsofthyper-v.info",
          "microsoftboard.com",
          "empower-yourbusiness.com",
          "microsoftsign-in.biz",
          "mscrmtrial.ru",
          "microsoftaccelerator.com",
          "cortanaanalyticssuite.nl",
          "microsoftkurs.com",
          "letinfobeyourguide.com",
          "fieldine.com",
          "microsoft360.org",
          "windowsads.net",
          "r-language.info",
          "microsoft-international.org",
          "bingnetworks.fr",
          "buy-microsoft.net",
          "microsoftbanking.com",
          "microsoct.org",
          "microsoftbilling.info",
          "makecode.com",
          "powerbi.com",
          "msdn.com",
          "yahoobingnetwork.dk",
          "securitytour.de",
          "microsoftstore.com",
          "bingnetwork.hk",
          "seeingai.com",
          "photosynth.net",
          "microsoft.eu",
          "buysqlserver.com",
          "windowsazure.co.uk",
          "windowslive.fr",
          "azure.ai",
          "microsoftfonts.com",
          "microsoftcrm.org",
          "bingexpressad.net",
          "yahoobingnetwork.tv",
          "wwwmicrosoft-onlinesafety.com",
          "microsoftforefront.no",
          "dotnet.cz",
          "technetevents.com",
          "topcrmsolutions.org",
          "swiftkey.com",
          "inmage.com",
          "microsoftretail.com",
          "fieldone.com",
          "windowsphone.com.au",
          "bholdcompany.com",
          "azure.co.uk",
          "commicrosoft.com",
          "revolutionanalytics.com",
          "microsoft-fraud.biz",
          "miicrosoft.org",
          "microsoft-security.net",
          "microsoft-accounts.info",
          "microsoftcertificationsecrets.com"
        ],
        "site": {
          "phoneNumbers": [],
          "emailAddresses": []
        },
        "category": {
          "sector": "Information Technology",
          "industryGroup": "Software & Services",
          "industry": "Internet Software & Services",
          "subIndustry": "Internet Software & Services",
          "sicCode": "73",
          "naicsCode": "51"
        },
        "tags": [
          "Information Technology & Services",
          "Computer Hardware",
          "Consumer Electronics",
          "Cloud Services",
          "Video Games",
          "Internet",
          "Telecommunications",
          "Technology",
          "B2B",
          "Enterprise",
          "SAAS",
          "Consulting & Professional Services"
        ],
        "description": "At Microsoft our mission and values are to help people and businesses throughout the world realize their full potential.",
        "foundedYear": 1975,
        "location": "1 Microsoft Way, Redmond, WA 98052, USA",
        "timeZone": "America/Los_Angeles",
        "utcOffset": -7,
        "geo": {
          "streetNumber": "1",
          "streetName": "Microsoft Way",
          "subPremise": null,
          "city": "Redmond",
          "postalCode": "98052",
          "state": "Washington",
          "stateCode": "WA",
          "country": "United States",
          "countryCode": "US",
          "lat": 47.6393782,
          "lng": -122.1282593
        },
        "logo": "https://logo.clearbit.com/microsoft.com",
        "facebook": {
          "handle": "microsoftindia",
          "likes": 11797099
        },
        "linkedin": {
          "handle": "company/microsoft"
        },
        "twitter": {
          "handle": "Microsoft",
          "id": "74286565",
          "bio": "We’re on a mission to empower every person and every organization on the planet to achieve more. Support: @MicrosoftHelps",
          "followers": 8461392,
          "following": 2556,
          "location": "Redmond, WA",
          "site": "https://t.co/bKBtZeAFrh",
          "avatar": "https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_normal.jpg"
        },
        "crunchbase": {
          "handle": "organization/microsoft"
        },
        "emailProvider": false,
        "type": "public",
        "ticker": "MSFT",
        "identifiers": {
          "usEIN": "911144442"
        },
        "phone": "+1 425-882-8080",
        "metrics": {
          "alexaUsRank": 32,
          "alexaGlobalRank": 37,
          "employees": 124000,
          "employeesRange": "100K+",
          "marketCap": 760925500000,
          "raised": null,
          "annualRevenue": 89950000000,
          "estimatedAnnualRevenue": "$10B+",
          "fiscalYearEnd": 6
        },
        "indexedAt": "2018-06-01T04:20:23.679Z",
        "tech": [
          "microsoft_exchange_online",
          "clicktale",
          "microsoft_office_365",
          "omniture_adobe_analytics",
          "twitter_button",
          "optimizely"
        ],
        "parent": {
          "domain": null
        }
      }
    }
  }
}
```