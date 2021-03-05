const path = require('path');
const Table = require('table-layout');
const chalk = require('chalk');
const ctx = new chalk.Instance({level: 2});

const qr = require(path.resolve(__dirname, './qr'));

const c = {
	gray: ctx.gray,
	yellow: ctx.hex('#f3f99d'),
	orange: ctx.hex('#ff9f43'),
	// green: ctx.hex('#60f49c'),
	green: ctx.hex('#1bf07b'),
}

const cardText = [
	'', '',
	`${c.yellow('Martin Kapp')} ${c.gray('/')} ${c.orange('meister')}`,
	`\n`,
	`${c.green('Head of Engineering, Frontend Platform')} ${c.orange('@ Pipedrive')}`,
	`\n`,
	`Github:    ${c.orange('https://github.com/meister')}`,
	`LinkedIn:  ${c.orange('https://www.linkedin.com/in/martinkapp')}`,
	`Website:   ${c.orange('https://martin.kapp.ee')}`
].join('\n')


module.exports = () => {
	const table = new Table([
		{
			qrCol: `\n${qr.join('\n')}`,
			cardCol: cardText
		}
	], {
		columns: [{
			name: 'qrCol',
			width: 34,
			padding: {
				left: '   ',
				right: ' │  '
			}
		}, {
			name: 'cardCol',
			width: 55
		}]
	});

	console.log('\n');
	console.log(table.toString());
}