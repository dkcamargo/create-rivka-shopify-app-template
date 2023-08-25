const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const { $ } = import('execa');


const projectName = process.argv[2];
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);


const duplicateTempalte = async () => {
    fs.mkdirSync(projectDir, { recursive: true });
    
    const templateDir = path.resolve(__dirname, 'template');
    fs.cpSync(templateDir, projectDir, { recursive: true });
    
    fs.renameSync(
        path.join(projectDir, 'gitignore'),
        path.join(projectDir, '.gitignore')
    );
    const projectPackageJson = require(path.join(projectDir, 'package.json'));
    
    projectPackageJson.name = projectName;
    
    fs.writeFileSync(
        path.join(projectDir, 'package.json'),
        JSON.stringify(projectPackageJson, null, 2)
    );
}


(async () => {
    console.log(`
        Begining to Create Shopify App Template for  ${projectName} 
        
        Go get a coffee it might take a few minutes!
    `);

    await duplicateTempalte();
    // npm start --prefix path/to/your/app
    spawn.sync('npm', [`install`, '--prefix', projectDir.toString()], { stdio: 'inherit' });

    console.clear();

    console.log(`
        ${projectName}
        │   .gitignore
        │   LICENSE.md
        │   package.json
        │   README.md
        │
        └───web
            │   gdpr.js
            │   index.js
            │   package.json
            │   shopify.js
            │   shopify.web.toml
            │   yarn.lock
            │
            └───frontend
                │   App.jsx
                │   dev_embed.js
                │   .gitignore
                │   index.html
                │   index.jsx
                │   LICENSE.md
                │   package.json
                │   Routes.jsx
                │   shopify.web.toml
                │   vite.config.js
                │
                ├───assets
                │       empty-state.svg
                │       home-trophy.png
                │       index.js
                │
                ├───hooks
                │       index.js
                │       useAppQuery.js
                │       useAuthenticatedFetch.js
                │
                ├───pages
                │       ExamplePage1.jsx
                │       ExamplePage2.jsx
                │       ExitIframe.jsx
                │       HomePage.jsx
                │       index.jsx
                │       NotFound.jsx
                │
                └───providers
                        AppBridgeProvider.jsx
                        index.js
                        PolarisProvider.jsx
                        QueryProvider.jsx

        Done Creating ${projectName} Shopify App Template
        
        cd ./${projectName}
        npm run dev

        Happy Hacking!
    `);
})()