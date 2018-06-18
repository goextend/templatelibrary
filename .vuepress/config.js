module.exports = {
	title:"Extend Integration Library",
	description:"Samples to Empower Your Extend Deployment",
	host:'localhost',
	serviceWorker:true,
	themeConfig:{
		sidebar:getPosts()
	}
}

/*
hard coded for now, but can be dynamic
*/
function getPosts() {
	return [{
			title:"Examples",
			collapsible:false,
			children:
			[
			"/examples/amazons3",
			"/examples/clearbit",
			"/examples/sendgrid",
			"/examples/twitter"
		]
	}];
}