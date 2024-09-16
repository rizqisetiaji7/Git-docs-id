import { defineConfig } from 'vitepress'
import links from './Links.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id',
  title: "Git Docs",
  description: "Belajar Git Dasar Bahasa Indonesia",
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcDir: 'src',
  vite: {
    server: {
      port: 9170
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'tokyo-night'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/favicon.ico',
    ...links,
    outline: 'deep'
  }
})
