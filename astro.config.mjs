// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://zhanboloteraliev.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### ⚠️ CRITICAL: The 404 will not go away until you do this:

Changing the file above is **not enough** to fix the 404 error. You **must** perform the "GitHub Actions" setup because this template cannot run on the default GitHub settings.

If you haven't done so yet, please follow these two steps:

1.  **Create the workflow file:**
    * Create a new file in your repo named: `.github/workflows/deploy.yml`
    * Paste this code inside:
        ```yaml
        name: Deploy to GitHub Pages

        on:
          push:
            branches: [ master ]
          workflow_dispatch:

        permissions:
          contents: read
          pages: write
          id-token: write

        concurrency:
          group: "pages"
          cancel-in-progress: false

        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - name: Checkout your repository using git
                uses: actions/checkout@v4
              - name: Install, build, and upload your site
                uses: withastro/action@v2
          deploy:
            needs: build
            runs-on: ubuntu-latest
            environment:
              name: github-pages
              url: ${{ steps.deployment.outputs.page_url }}
            steps:
              - name: Deploy to GitHub Pages
                uses: actions/deploy-pages@v4
