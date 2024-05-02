# tostulib-svelte

## Installation
1. npm i -D tostulib-svelte
2. add module to tailwind config
    ```javascript
    export default {
        content: [
            './src/**/*.{html,js,svelte,ts}',
            './node_modules/tostulib-svelte/**/*.{html,js,svelte,ts}'
        ],
        theme: {
            extend: {}
        },
        plugins: []
    };
    ```
## Usage
1. import component from library
    ```sveltehtml
    <script>
      import { Layout } from 'tostulib-svelte';
    </script>
    ```
2. use component
    ```sveltehtml
    <Layout>
      <slot />
    </Layout>
    ```
