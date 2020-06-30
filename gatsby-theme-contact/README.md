# gatsby-theme-contact

Gatsby theme for a styled serverless contact page using Netlify Forms. It can also be customized to work with other backend services than Netlify by [shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) the form component.

**IMPORTANT NOTE: Form submission by default only works on Netlify because it uses Netlify Forms. For other hosting services you have to override the form.**

![Theme preview](https://raw.github.com/Pyrax/gatsby-theme-contact/master/.github/static/images/theme-preview.png)

## Installation

1. Install the theme and (optionally) theme-ui:

   ```sh
   npm install gatsby-theme-contact theme-ui gatsby-plugin-theme-ui
   ```

2. Add the configuration to your `gatsby-config.js` file:

   ```js
   // gatsby-config.js
   module.exports = {
     siteMetadata: {
       // Links to your social networks:
       social: [
         {
           url: 'https://github.com/Pyrax',
           name: 'GitHub'
         }
       ]
     },
     plugins: [
       {
         resolve: `gatsby-theme-contact`,
         options: {
           contactPath: '/contact',
           successPath: '/thanks'
         }
       }
     ]
   }
   ```

3. Shadow `details`-component to customize your address etc. (this is where you might need theme-ui)

   ```js
   // src/gatsby-theme-contact/components/details.js
   /** @jsx jsx */
   import React from 'react'
   import { jsx, Styled } from 'theme-ui'

   const Details = () => (
     <>
       <Styled.h3 sx={{ mt: 0 }}>Address</Styled.h3>
       <span>
         David Mathews
         <br />
         1011 Malesuada Road
         <br />
         Moscow Kentucky 77382
       </span>

       <Styled.h3>Phone</Styled.h3>
       <span>(357) 616-5411</span>

       <Styled.h3>Email</Styled.h3>
       <span>
         <Styled.a href='mailto:email@example.com'>email@example.com</Styled.a>
       </span>
     </>
   )

   export default Details
   ```

## Available options

| Key           | Default value | Description                                                      |
| ------------- | ------------- | ---------------------------------------------------------------- |
| `contactPath` | `/contact`    | URL of the contact form.                                         |
| `successPath` | `/thanks`     | URL of the form action where users without JavaScript will land. |
