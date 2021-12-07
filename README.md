# Nuxt Static Site for 169cm.pl | natally-nuxt 3.1.1 

## Entry points
- [https://169cm.pl](https://169cm.pl)
- [https://stage.169cm.pl](https://stage.169cm.pl)
- [https://storybook.169cm.pl](https://storybook.169cm.pl)

## Commands

```bash
# install submodules
$ git submodule init
$ git submodule update

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run tests
$ npm run test

# generate static project
$ npm run generate

---

# bootstrap new component
$ npm run bootstrap:component [type] [name]
$ npm run bootstrap:component poems Nastawienie

# deploy code on server (need .env file)
$ npm run deploy:storybook
$ npm run deploy:stage
$ npm run deploy:prod

# storybook
$ npm run storybook:run
$ npm run storybook:build
```

## Wait, there is more!

You need access to 3 more repositories to start the project:

- `natally-nuxt-content` - where markdown files lives,
- `natally-nuxt-images` - where any public images are placed (e.g. covers & open graphs),
- `natally-nuxt-deploy` - where CI/CD happens

Please note: This repository is portfolio-like to showcase my latest development skill ;)

## FAQ

### Why did you do this?
- to showcase my latest Front End development skills,
- to experiment with the project's design, ideas & patterns,
- to rewrite WordPress theme for my own blog, 169cm.pl,
- to get familiar with Nuxt.

### Do you like Nuxt?
Version 2 is quite nice, but I am looking for Version 3. It is faster & have better TypeScript support. Yet, mein gott! This project was a Nuxt crash course for me. Modules, Head, Plugins, Lazy Hydration, SSR / SSG, no browser context on the server side, Content Mismatch & a bit of Lighthouse performance fights :D

### Why not Nuxt 3?
I started development in August 2021. There were no Nuxt 3 beta then. Also, I tried the `nuxt/content` and it not supports v3 yet.

### Where is the SASS / LESS / Stylus / other CSS preprocessor?
Is it possible to create medium size project with CSS only? It was fun, but I missed SCSS a lot (especially mixins and tooling). Today, I would go with the SCSS from the beginning.

### What is the Block -> Wrapper -> Component structure?
This is the legacy components approach from the `natally-wordpress` and... it is terrible thing for Vue. Blocks cannot be the "the self constituting pieces", like in the PHP version. I lost a bit of performance because of this. This is the last time when I used it. Time to bury it deeper than expected and look for something better!

### Why Event Bus, not Vuex?
This was an experiment. I always wanted to try the Event Bus approach. It is good for global events (like scroll / resize), but it gets messy and entangled when it comes about specific components (like Header <-> Drawer relationship here). I will stick to the Vuex next time. Most developers would expect it (Principle Of Least Astonishment).

### What a nice light / dark theme support!
Light / Dark theme with CSS Variable are awesome! Still, there is a room for improvements here. `_variables.css` should have generic colors, and stage two variables like shadow, border etc. Then components should define their variables inside their styles. This is kind of obvious, but I did not do it here! I will keep this in mind for the future projects.

### What do you think about `nuxt/content`?
It is gloriously superb for the SSR, but with the SSG is terribly bad. Why?
- no loading state,
- strange fallback page behavior - no `nuxt/content` fetch there,
- hard-coded content on pages - no content randomization for the Related Posts section.

### Why not 100% test coverage?
Because of the Nuxt's asyncData / fetch hooks. These cannot be called when doing integration tests of blocks.
Yes, I am looking at you! Feel free to create an issue if you have a solution for this!

### Why ... ?
If you have any questions, feel free to create an issue!
