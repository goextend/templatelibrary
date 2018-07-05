---
{
	"home":true,
	"heroImage":"img/hero2.svg",
}
---

Welcome to the Extend Integration Library. This is a set of examples that demonstrate how to integrate various third party APIs into your extensions. For each example we provide information on how to setup your keys (and what limitations may be involved for trials) and provide a sample extension. If you have any suggestions for integrations to add, drop us a [line]() and we'll get back to you!

## Recent Additions

<RecentExamples/>

## Add the Library

You can add the library to your own Extend editor by making use of [categories](https://goextend.io/docs/extend-editor#categories) option. This allows you to add the library as a category for new Extend scripts and provides a quick way to test all of the examples. In order to add the library as a category, supply the following in your editor configuration.

```js
categories:[
  {
    name:'Template Library', 
    description:'A set of integration examples.',
    icon: 'wt-icon-717',
    templates:'http://labs.goextend.io/templatelibrary/feed.json'
    }
  ];
```
