var fs = require('fs');
var base64 = require("./library.js");

const allData = {};
let count = 0;


fs.readdir("./", (err, files) => {
	files = files.filter((file) => {
		const broken = file.split(".");
		return broken[broken.length-1] === 'txt' && broken[broken.length-1] !== 'all';
	});
	files.forEach(file => {
		fs.readFile(`./${file}`, 'utf8', (err, data) => {
			const parsed = JSON.parse(base64.decode(data));
			count ++;
			Object.keys(parsed).forEach((item) => {
				allData[item] = parsed[item];
			});
			if(count === files.length) {
				const output = base64.encode(JSON.stringify(allData));
				fs.writeFile("./all.txt", output, () => {});
			}
		});
	});
});

















