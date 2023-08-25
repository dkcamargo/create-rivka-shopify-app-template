# Rivka Shopify App Template

Welcome to the **Project Name Shopify App Template** repository! This template serves as a starting point for creating Shopify apps. It includes both backend and frontend components.

## Project Structure
```
    Your Project
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
```

## Getting Started

1. ```npx create-rivka-shopify-app-template <your-project-name>```
2. Navigate to the project directory: `cd <your-project-name>`
3. Run the development server: `npm run dev`

The template is organized with backend code under the `web` directory and frontend code under `web/frontend`.

## Usage

This template is designed to help you quickly start building Shopify apps. Customize the backend and frontend components according to your app's requirements.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push the branch: `git push origin feature-new-feature`.
5. Create a pull request!

## License

This project is licensed under the [MIT](LICENSE.md).

---

Feel free to reach out if you have any questions or need assistance. Happy hacking!