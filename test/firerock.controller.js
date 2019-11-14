const {exec} = require('child_process');

exec('cd & python --version', (err, stdout, stderr) => {
    console.log(err);
    console.log(stdout);
    console.log(stderr);    
});