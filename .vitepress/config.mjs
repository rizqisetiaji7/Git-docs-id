import { defineConfig } from 'vitepress'
import links from './links.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id',
  title: "Git VCS",
  description: "Belajar Git Dasar Bahasa Indonesia",
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcDir: 'src',
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
