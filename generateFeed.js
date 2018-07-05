const fs = require('fs');

const source = './examples';
const codeSource = './.vuepress/samples';

let files = fs.readdirSync(source);

let result = {"templates":[]};

files.forEach(f => {
	//console.log('parsing '+f);
	let content = fs.readFileSync(source+'/'+f,'UTF-8');
	let fm = parseFrontMatter(content);
	let codeFile = f.replace('.md','.js');
	let code = fs.readFileSync(codeSource+'/'+codeFile, 'utf-8');
	let temp = {
		name:fm.title,
		description:'Template Library smaple for '+fm.title,
		meta:{},
		code:code
	}
	if(fm.secrets) {
		temp.secrets = fm.secrets;
	}
	result.templates.push(temp);
	//console.log(fm);
});

console.log(JSON.stringify(result));

function parseFrontMatter(s) {
	// this is real shit btw
	let lb = s.indexOf('---',1);
	let fm = s.substring(3, lb).trim();
	return JSON.parse(fm);
}

/* sample
      {
        name:'a1',
        meta:{
          'ray':'1',
          'wt-editor-template-instructions':'do it like so'
        },
        secrets:{
          'password':'secret'
        },
        description:'The alpha one template',
        author:{
          name:'Ray Camden',
          link:'https://www.raymondcamden.com'
        },
        code:`
for(let i=0;i<10;i++) {
	console.log('awesome');
}
        `
        },

*/