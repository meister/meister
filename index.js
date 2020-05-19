const Table = require('table-layout');
const qr = require('./qr');
const chalk = require('chalk');
const ctx = new chalk.Instance({level: 2});

const c = {
	gray: ctx.gray,
	yellow: ctx.hex('#f3f99d'),
	orange: ctx.hex('#ff9f43'),
	// green: ctx.hex('#60f49c'),
	green: ctx.hex('#1bf07b'),
}

console.log('\n');

const cardText = [
	'', '',
	`${c.yellow('Martin Kapp')} ${c.gray('/')} ${c.orange('meister')}`,
	`\n`,
	`${c.green('Principal Developer')} ${c.orange('@ Pipedrive')}`,
	`\n`,
	`Github:    ${c.orange('https://github.com/meister')}`,
	`LinkedIn:  ${c.orange('https://www.linkedin.com/in/martinkapp')}`,
	`Website:   ${c.orange('https://martin.kapp.ee')}`
].join('\n')

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
	}]
});

console.log(table.toString());
