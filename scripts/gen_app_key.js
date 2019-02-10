const readline = require('readline');
const fs = require('fs');
let args = process.argv;

if (args.length > 2 && !/^\d+$/.test(args[2])) {
    throw Error('invalida parameter.');
    process.exit(1);
}

const makeid = (length = 54) => {
  let text = '';
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 54; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const len = args.length > 2 ? args[2] : 54;
const APP_KEY = makeid(len);

console.log('APP_KEY: ');
console.log(APP_KEY);

let dotenv = '';
let matches = 0;

const APP_KEY_VAR =  `APP_KEY="${APP_KEY}"\n`;

let rl = readline.createInterface({
    input: fs.createReadStream('.env')
});

rl.on('line', line => {
    if (/APP_KEY/.test(line)) {
        matches++;
        dotenv += APP_KEY_VAR;
    } else {
        dotenv += `${line}\n`;
    }
});

rl.on('close', line => {

    if (matches === 0) {
        dotenv += APP_KEY_VAR;
    }

    try {
        fs.writeFileSync('.env', dotenv, 'utf-8');
    } catch (e) {
        console.log(e);
    }
});
