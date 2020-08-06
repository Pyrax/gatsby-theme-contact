# gatsby-theme-contact

![Theme preview](https://raw.github.com/Pyrax/gatsby-theme-contact/master/.github/static/images/theme-preview.png)

## Description

Gatsby theme for a styled serverless contact page using Netlify Forms. It can also be customized to work with other backend services than Netlify by [shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) the form component.

**IMPORTANT NOTE: Form submission by default only works on Netlify because it uses Netlify Forms. For other hosting services you have to override the form.**

### Dependencies

In this theme we mainly use [`theme-ui`](https://theme-ui.com/) for styling and [`react-netlify-forms`](https://pyrax.github.io/react-netlify-forms/) for form handling.

### Learning Resources

If you want to understand how Netlify Forms is integrated into a Gatsby site, have a look at this [blog post](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators). However, we are using [react-netlify-forms](https://pyrax.github.io/react-netlify-forms) because it provides basic form state and a submit handler by default.

## How to install

This theme requires `yarn` as it uses `yarn workspaces` for developing the theme and a working example in the same project. Therefore, if you need to switch your package manager for Gatsby CLI have a look [at this guide](https://www.gatsbyjs.org/docs/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project).

Use `yarn install` to install all dependencies. Then, you are ready to [develop locally](#how-to-develop-locally).

## How to develop locally

Run `yarn workspaces example develop` in the root directory of this repository. Then you should be able to open the example page at `localhost:8000`.

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, please open an issue. Pull Requests are welcome for small changes. For major or breaking changes please present your ideas in an issue first.
