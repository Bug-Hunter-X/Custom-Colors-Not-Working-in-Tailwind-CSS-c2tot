# Tailwind CSS Custom Color Issue

This repository demonstrates a bug where custom colors defined in the `tailwind.config.js` file are not being applied in the HTML.  Despite following Tailwind's official documentation, the custom color `bg-custom-blue` fails to render correctly.

## Bug Description

The `tailwind.config.js` file correctly defines a custom color, `custom-blue`, but the corresponding class, `bg-custom-blue`, does not apply the expected color in the `index.html` file.

## Solution

The solution involves ensuring that the Tailwind CSS build process is correctly configured to include and process your custom color definitions.  This may involve cleaning your build cache or restarting your development server.