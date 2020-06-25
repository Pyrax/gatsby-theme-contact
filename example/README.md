# gatsby-theme-contact example

This is a minimal example for using gatsby-theme-contact.

## Additional dependencies

- `gatsby-plugin-react-helmet` & `react-helmet`
- `gatsby-plugin-theme-ui` & `theme-ui`

## Which components are shadowed in this example and why?

This example shadows the components `details` and `layout` from the original theme.

By overriding `details` we have full control of what is displayed next to the form as contact details. This might include address or phone number for example.

Then, we also shadow the default `layout` to provide our own SEO component from this example to the theme. Thus, SEO fields are injected into all pages created by the theme through that modified layout.
