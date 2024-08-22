const fs = require('fs');

const userName = 'Max';

fs.writeFile('user-data.txt', 
    `Name: ${userName}`, 
    err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Wrote file');
    }
);