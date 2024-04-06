const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'});

// Content for environment.ts and environment.prod.ts files
const envFileContent = `export const environment = {
  production: '${process.env.PRODUCTION}',
  firebase: {
    apiKey: '${process.env.API_KEY}',
    authDomain: '${process.env.AUTH_DOMAIN}',
    projectId: '${process.env.PROJECT_ID}',
    storageBucket: '${process.env.STORAGE_BUCKET}',
    appId: '${process.env.APP_ID}',
  },
};
`;

// Path to the target environments folder
const targetFolderPath = path.join(__dirname, './src/environments');

// Function to create environments folder and environment files
const createEnvironmentFiles = () => {
    // Check if environments folder exists, if not, create it
    if (!fs.existsSync(targetFolderPath)) {
        fs.mkdirSync(targetFolderPath);
    }

    // Write environment.ts file
    const targetFilePath = path.join(targetFolderPath, 'environment.ts');
    fs.writeFile(targetFilePath, envFileContent, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(successColor, `${checkSign} Successfully generated environment.ts`);
        }
    });

    // Write environment.prod.ts file
    const targetProdFilePath = path.join(targetFolderPath, 'environment.prod.ts');
    fs.writeFile(targetProdFilePath, envFileContent, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(successColor, `${checkSign} Successfully generated environment.prod.ts`);
        }
    });
};

// Invoke function to create environment files
createEnvironmentFiles();
