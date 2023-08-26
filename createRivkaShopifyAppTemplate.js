const spawn = require('cross-spawn');
const path = require('path');

function isUsingYarn() {
    return (process.env.npm_config_user_agent || '').indexOf('yarn') === 0;
}
function init() {
    const projectName = process.argv[2];

    const root = path.resolve(projectName);

    console.log(`
        Begining to Create Shopify App Template for  ${projectName} on: ${root}
        
        Go get a coffee it might take a few minutes!
    `);


    spawn.sync('git', [`clone`, 'https://github.com/dkcamargo/rivka-shopify-app-template.git', root], { stdio: 'inherit' });
    spawn.sync('git', [`remote`, 'remove', 'origin'], { stdio: 'inherit', cwd: root });
    if(isUsingYarn) {
        spawn.sync('yarn', [], { stdio: 'inherit', cwd: root });
    } else {
        spawn.sync('npm', ['install'], { stdio: 'inherit', cwd: root });
    }
    
    
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
        ${isUsingYarn()?'yarn dev':'npm run dev'}

        Happy Hacking!
    `);
}


module.exports = {
    init
};