const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'});

// Content for environment.ts file
const envFileContent = `export const environment = {
    production: '${process.env.PRODUCTION}',
    weatherApiBaseUrl: '${process.env.WEATHERBASEAPIURL}',
    appid : '${process.env.APPID}'
};
`;

// Path to the target environment.ts file
const targetFolderPath = path.join(__dirname, './src/environments');
const targetFilePath = path.join(targetFolderPath, 'environment.ts');

// Function to create environments folder and environment.ts file
const createEnvironmentFiles = () => {
    // Check if environments folder exists, if not, create it
    if (!fs.existsSync(targetFolderPath)) {
        fs.mkdirSync(targetFolderPath);
    }

    // Write environment.ts file
    fs.writeFile(targetFilePath, envFileContent, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(successColor, `${checkSign} Successfully generated environment.ts`);
        }
    });
};

// Invoke function to create environment files
createEnvironmentFiles();
