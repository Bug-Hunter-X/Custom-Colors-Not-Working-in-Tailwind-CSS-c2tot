```javascript
// Ensure your Tailwind config is correct
// tailwind.config.js
module.exports = {
  content: ['./index.html'], // Add this line to specify the content directory
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db',
      },
    },
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<div class="bg-custom-blue">
  <h1>Hello, Tailwind!</h1>
</div>
```