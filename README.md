# Emitra UI

A Svelte UI library designed to simplify your web development. It offers a collection of customizable, performance-optimized components that integrate seamlessly with Svelte applications.

## Getting Started

This library expects you have setup a SvelteKit project. Here's how to do so:

```bash
pnpm create svelte my-project
cd my-project
pnpm install
```

You also need to install TailwindCSS.

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

Let's continue by installing the library.

```bash
pnpm add -D @emitra-labs/ui
```

Update `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@emitra-labs/ui/dist/**/*.{js,svelte}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [require('@emitra-labs/ui/preset.cjs')]
};
```

Update `src/routes/+layout.svelte` file:

```svelte
<script>
  import { EmitraProvider } from '@emitra-labs/ui';
  import '@emitra-labs/ui/styles.css';
</script>

<EmitraProvider>
  <slot />
</EmitraProvider>
```

That's it. Now, you can start using the components like this:

```svelte
<script>
  import { Button } from '@emitra-labs/ui';
</script>

<Button>Hello Button</Button>
```
