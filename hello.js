
//process
const mission = process.argv[2]; //node process-args.js one two=three four
if (mission === 'learn') {
    console.log('First argument is "learn"!');
} else {
    console.log(`process.argv[2]: ${mission}`);
}

