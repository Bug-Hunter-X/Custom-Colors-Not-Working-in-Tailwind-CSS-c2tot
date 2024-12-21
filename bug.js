```javascript
// tailwind.config.js
module.exports = {
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