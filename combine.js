var fs = require('fs');
var base64 = require("./library.js");

const allData = {};
let count = 0;


fs.readdir("./", (err, files) => {
	files = files.filter((file) => {
		const broken = file.split(".");
		return broken[broken.length-1] === 'txt' && broken[broken.length-2] !== 'all';
	});
	files.forEach(file => {
		fs.readFile(`./${file}`, 'utf8', (err, data) => {
			const parsed = JSON.parse(base64.decode(data));
			const broken = file.split(".");
			const army = broken[broken.length-2].split("_").join(" ");
			
			count ++;
			Object.keys(parsed).forEach((item) => {
				try {
				let unit = JSON.parse(parsed[item]);
				unit.name = `${unit.name} (${army})`;
				allData[`${item} (${army})`] = JSON.stringify(unit);
				} catch (e) {}
			});
			if(count === files.length) {
				const output = base64.encode(JSON.stringify(allData));
				fs.writeFile("./all.txt", output, () => {});
			}
		});
	});
});

















