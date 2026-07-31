#### FUNDAMENTALS OF NUXTJS ####

### MODULE 1 INTRO TO NUXTJS AND CORE
## Intro to the course
## Meet your Instructor

### UNDERSTANDING NUXTJS
## What you will learn AND Intro to NuxtJS
# Optimizes app for SEO
# Faster loading time
# Still get all the benefits of an SPA Single Page Application
# dynamically rewrites the existing page with new data fetched from a server using JavaScript APIs

## SETTING UP THE DEVELPMENT ENVIRONMENT
# INSTALL
WWW.NUXT.COM
install node
# node -v
# pnpm dlx nuxi@latest init nuxt0xne OR npx nuxi init nuxt0xne MINIMAL TEMPLATE
Because pnpm uses a unique, semi-strict dependency tree structure, you may occasionally run into module resolution issues with certain Nuxt modules. If this happens, create an .npmrc file in the root directory of your project and add the following line to enable hoisting:inishamefully-hoist=true
# pnpm approve-builds
# pnpm run dev

## NUXTJS PAGES AND ROUTING
# PAGES individual routes in your app created as Vue.js files, each file a route
# ../pages/about.vue
<template>
    <p>This is the about page.</p>
</template> 
TEST GOTO http://localhost:3000/about

# CREATE index. vue 
# DELETE app.vue
# pages/index.vue
<template>
    <div>
        <h1>Homepage</h1>
        <p>This is the homepage of our Nuxt.js application.</p>
    </div>
</template>
TEST GOTO http://localhost:3000/index

# ../pagesproducts/mobiles.vue
<template>
    <div>
        <h1>This is mobiles page</h1>
    </div>
</template>
TEST GOTO http://localhost:3000/products/mobiles 

# If you goto http://localhost:3000/products you will get 404 need indx.vue
# ..pages/products/inex.vue

## READ MORE ABOUT NUXTJS

## PRACTICE QUIZ - UNDERSTANDING NUXTJS
1 a freshly created Nuxt 3 project, which directory is primarily responsible for defining the application's main pages and driving the file-based routing system?
pages/ directory containing Vue single-file components
2 In a newly created Nuxt 3 project, where should you place a Vue component file so that it automatically becomes an accessible page at the root path / ?
Create an index.vue file inside the pages directory
3 Before creating a new Nuxt3 project on your local machine, which step is essential to ensure you can run the Nuxt CLI and development server successfully?
Install a compatible version of Node.js on your system
4 A developer claims that switching from a plain Vue.js SPA to NuxtJS can significantly improve SEO. Which feature of NuxtJS most directly supports this?
Server-side rendering that delivers pre-rendered HTML to crawlers
5 In a Nuxt3 project using file-based routing, how would you structure your files to support both the root route/and a nested route /dashboard settings?
Create pages/index.vue for / and pages/dashboard/settings.vue for /dashboard/settings

### LAYOUTS AND COMPONENTS
## WHAT YOU WILL LEARN LAYOUTS AND LINKING PAGES, DYNAMIC AND WELL STRUCTURED APP
# Reusable components that define the common structure and UI elements (e.g., headers and footers) for your web pages. Allow you to aintain a consistent design and structure across multiple pages in your app. Easier to update layout.
# pages/index.vue
<template>
    <div>
        <h1>Homepage</h1>
        <p>This is the homepage of our Nuxt.js application.</p>
    </div>
</template>
<style>
</style>

## WORKING WITH LAYOUTS
# FOR A HEADER ON ALL PAGES CREATE A LAYOUTS FOLDER
# layouts/default.vue
<template>
    <header id="header">This is my header</header>
        <div>
            <slot />
        </div>
</template>template>
<style>
    #header {
        background-color: black;
        color: white;
        height: 50px;       
    }
</style>

# FOR CUSTOM LAYOUTS
layouts/products.vue
<template>
    <header id="header">This is my header</header>
        <div>
            <slot />
        </div>
</template>
<style>
    #header {
        background-color: blue;
        color: white;
        height: 50px;       
    }
</style>

# pages/products/index.vue
<template>
    <div>
        <h1>Products</h1>
        <p>This is the Products root page of our Nuxt.js application.</p>
    </div>
</template>
<scripts>
    definePageMeta({
        layout: 'products'
    })
</scripts>

# TESThttp://localhost:3000/products FOR BLUE HEADER

## CREATING AND USING COMPONENTS - Components are reusable pieces of Vue.js code that encpsulates specific functionality or user interface elements.
# Nuxt automatically imports any components in this directory along with components that are registered by any modules you may be using.

# ../components/Card.vue
<template>
    <div class="card">
      <h3>Product Name</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="button">Buy</button>
     </div>
</template>
<style>
    .card {
        border: 1px solid #cccccc;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 25%;
        display: inline-block;
    }

    .button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.5px;
        border-radius: 3px;
        cursor: pointer;
    }

    .button:hover {
        background-color: #0056b3;
    }
</style>

# NOW I CAN PLACE THE ,Card IN INDEX.vue
<template>
    <div>
        <h1>Homepage</h1>
        <p>This is the homepage of our Nuxt.js application.</p>
        <img id="banner" src="https://i.ytimg.com/vi/IRD3sinNowU/maxresdefault.jpg" alt="Nuxt.js Banner" />   
    </div>
    <Card />
    <Card />
</template>
<style>
    #banner {
        width: 100%;
        height: 250px;
        margin-top: 20px;
    }
</style>

# WE CAN MAKE A ROOT CARD LAYOUT, BUNDLE AND MOVE CARDS TO HOMEPAGE:
# components/Homepage/Card.vue
# NOW IN ../pages/index.vue
...
        <p>This is the homepage of our Nuxt.js application.</p>
        <img id="banner" src="https://i.ytimg.com/vi/IRD3sinNowU/maxresdefault.jpg" alt="Nuxt.js Banner" />   
    </div>
   <HomepageCard />
   <HomepageCard />
</template>
<style>
...

# NOW DO THE SAME FOR BANNER
# ../componets/Homepage/Banner.vue
<template>
    <div>
        <img id="banner" src="https://i.ytimg.com/vi/IRD3sinNowU/maxresdefault.jpg" alt="Nuxt.js Banner" />
    </div>
</template>
<style>
    #banner { 
        width: 100%;
        height: 250px;
        margin-top: 20px;
    }
</style>

# ../pages/index.vue
<template>
    <div>
        <h1>Homepage</h1>
        <p>This is the homepage of our Nuxt.js application.</p>
    </div>
    <HomepageBanner />
    <HomepageCard /> 
    <HomepageCard />
</template>

# If you only wanted HomepageCard add index.vue
# ../components/Homepage change Banner.vue to index.vue just call Homepage
...
<template>
    <!-- <div>
        <h1>Homepage</h1>
        <p>This is the homepage of our Nuxt.js application.</p>
    </div> -->
    <Homepage />
    <HomepageCard />
    <HomepageCard />
</template>

## LINKING BETWEEN PAGES
# ../layouts/default.vue
<template>
    <header id="header">This is my header
        <br />
        <br />
        <nav>
            <ul>
                <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="nav-link">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>
        <div>
            <slot />
        </div>
</template>
<style>
    nav ul { list-style: none; margin: 0; padding: 0; }
    nav li { display: inline-block; margin-right: 12px; }
    
    #header {
        background-color: black;
        color: white;
        height: 50px;       
    }
    .nav-link {
        display: inline-block;
        color:white;
        text-decoration: none;
    }
</style>

# ../pages//products/index.vue
<template>
    <div>
        <h1>Products</h1>
        <p>This is the Products root page of our Nuxt.js application.</p>
    </div>
</template>
<!-- <script>
definePageMeta({
    layout: 'products'
})
</script> -->

# ../layouts/default.vue
<template>
    <header id="header">This is my header
        <br />
        <br />
        <nav>
            <ul>
                <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="nav-link">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>
        <div>
            <slot />
        </div>
</template>
<style>
    nav ul { list-style: none; margin: 0; padding: 0; }
    nav li { display: inline-block; margin-right: 12px; }
    #header {
        background-color: black;
        color: white;
        height: 50px;       
    }
    .nav-link {
        display: inline-block;
        color:white;
        text-decoration: none;
    }
</style>

## READ MORE ABOUT LAYOUTS AND COMPONENTS
Working with Layouts:
In Nuxt.js, layouts provide a way to define the overall structure of your application's pages. A layout typically includes common elements like headers, footers, navigation menus, and other shared UI components. By using layouts, you can maintain a consistent look and feel across your application. Nuxt.js allows you to create multiple layouts, each serving a specific purpose. For example, you might have a default layout for most pages and a separate layout for your admin section. Layouts are defined in the layouts directory and can be applied to specific pages or globally across your application.
Linking Between Pages:
Nuxt.js provides a convenient way to navigate between pages using the <nuxt-link> component or the this.$router object. The <nuxt-link> component allows you to create links between pages while automatically generating the correct URLs based on your page structure. You can use named routes to reference pages by name rather than URL paths, making it easier to update links when your routes change. Additionally, you can customize link behavior, such as adding classes or handling link clicks. Navigating programmatically can be achieved using methods like this.$router.push() to programmatically change the route within your Vue components.

## PRACTICE QUIZ - LAYOUTS AND COMPONENTS
1. You are implementing navigation in a Nuxt.js app. Why is using the <NuxtLink> component generally preferred over a standard <a> tag for internal navigation?
<NuxtLink> enables client-side routing with prefetching and avoids full page reloads for internal links.
2. In a Nuxt 3 application using the components: true setting, how should you structure and reference a reusable BaseButton component so it can be used across multiple pages without manual imports?
Place BaseButton.vue inside the components/ directory and use it directly in templates as BaseButton without importing it in each file.
3. In a Nuxt 3 project with automatic component import enabled, how can you correctly use a BaseButton.vue component located in the components directory inside a page?
Place BaseButton.vue in the components directory and use <BaseButton> directly in the page template without manual import.
4. You have created a reusable NavBar component in a Nuxt 3 app and want it to appear on most pages, except for a minimal landing page that should only show a hero section. How can layouts help you implement this design effectively?
Create a default.vue layout that includes the NavBar and a minimal.vue layout without it, then assign the minimal layout to the landing page while other pages use the default layout.
Question 5
You are building a blog in Nuxt.js and want to use a header component with navigation on multiple pages. Which approach best demonstrates creating and utilizing a reusable component in Nuxt.js?
Create a Header.vue file in the components directory and include it in pages using the <Header> tag.
## TELL US WHAT YOU THINK
## QUICK COURSE CHECK-IN

### Module 2 ADVACED FEATURES AND STATE MANAGEMENT
## What you will learn in this lesson
# Introduction to VueX, State Mutations, actions and Getters

## Introduction to VueX in NUXTJS
# Vuex provides a centralized store for managing the state of your Nuxt App
# It uses myutations to safely modify state data
# Vuex seamlessly integrates with Nuxt components, allowing you to access and update state from different parts of your application
# DID IT WITH PINIA 
When $store is valid
$store only exists if you have a store plugin injected, e.g. Vuex or a Pinia store made available globally.
In Nuxt 4, {{ $store.state... }} is not available by default unless you explicitly set up a compatible store plugin.

Fix options
Option 1 — use local state:
# pnpm add @pinia/nuxt
# next.config.ts
```javascript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
})
```

#  ../pages/index.vue
<template>
 <h1>{{  $store.state.counter }}</h1>
 <button @click="inc">Add</button>
 <button @click="dec">Sub</button>
</template> 
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        inc() {
            this.counter++
        },
        dec() {
            this.counter--      
        }
    }
}
</script>

# TEST - SHOULD SEE A COUNTER 0 + buttons AT http://localhost:3000

# UING A STORE
# ../store/index.ts
```javascript
// state
export const state = () => ({
    counter: 3
})
```

# USING A STORE WITH PINIA
# ../stores/counter.ts
```javascript
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0 }),
  actions: {
    inc() { this.counter++ },
    dec() { this.counter-- }
  }
})
```

#  ../pages/index.vue
<template>
  <h1>{{ store.counter }}</h1>
  <button @click="store.inc">Add</button>
  <button @click="store.dec">Sub</button>
</template>
<script setup>
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
</script>

# WHAT CHANGES
default.vue:1-120: removed stray malformed closing token, moved the nav-link class from the <li> onto each NuxtLink, merged duplicate <style> blocks, and added minimal nav CSS for inline links and spacing.
index.vue:1-20: converted to script setup style, import useCounterStore, and use store.counter, store.inc, store.dec in the template (removed the old Options-API $store usage).
counter.ts: new Pinia store (setup-style) exposing counter (a ref) and inc() / dec() actions.
nuxt.config.ts enabled Pinia by adding modules: ['@pinia/nuxt'].
package.json: @pinia/nuxt / pinia added to dependencies.
index.ts:and counter.ts: backed-up legacy Vuex-style store files (moved to avoid conflicts). The previous store directory was removed/emptied.

## STATE MUTATIONS, ACTIONS, AND GETTERS 
# ../store/index.ts
// STATE
```javascript
export const state = () => ({
    counter: 5
})
```
# ../pages/index.vue
...
    <h1>{{ store.counter }}</h1> RETURNS 5

// GETTERS
# ../store/index.ts
```javascript
export const getters = {
    getCounterSquare(state: { counter: number }) {
        return (state.counter * state.counter)
    }
}

```
// MUTATIONS
# pnpm add vuvex vuex.ts creates a Vuex store and injects it as $store
# ..plugins/vuex.ts
```javascript
import { createStore } from 'vuex/dist/vuex.esm-bundler.js'
import { defineNuxtPlugin } from '#app'
import * as vuexStore from '~/store/index'
export default defineNuxtPlugin((nuxtApp) => {
  const store = createStore({
    state: vuexStore.state(),
    getters: vuexStore.getters,
    mutations: vuexStore.mutations,
  })
  nuxtApp.vueApp.config.globalProperties.$store = store
  nuxtApp.provide('store', store)
  return {
    provide: {
      store,
    },
  }
})


```
# ../store/index.ts
```javascript
export const mutations = {
    incMut(state: { counter: number }) {
        state.counter++
    },
    decMut(state: { counter: number }) {
        state.counter--
    }
}
```
# ../pages/index.vue




# MUTATIONS USING VUEX
# ../store/counter.ts
```javascript
export const state = () => ({ counter: 0 })
export const mutations = {
  increment(state) { state.counter++ },
  setCounter(state, n) { state.counter = n }
}
export const actions = {
  inc({ commit }) { commit('increment') },
  set({ commit }, n) { commit('setCounter', n) }
}
export const getters = {
  double(state) { return state.counter * 2 }
}



In Pinia:
getters are exposed directly on the store instance
there is no store.getter object
Correct Pinia pattern
You can’t use store.getter.getCounterSquare in Pinia.
getters are exposed directly on the store instance
there is no store.getter object
If you add a getter in your store like this see PT2:
## STATE MUTATIONS, ACTIONS, AND GETTERS PINIA
# ../stores/counter.ts
```javascript
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const _counter = ref(0)
  const counter = computed(() => _counter.value)
  const getCounterSquare = computed(() => _counter.value * _counter.value)
  const doubleCount = computed(() => _counter.value * 2)
  const tripleCount = computed(() => _counter.value * 3)
  function inc() { _counter.value++ }
  function dec() { _counter.value--}
  function setCounter(value: number) { _counter.value = value}
  return { counter, getCounterSquare, doubleCount, tripleCount, inc, dec, setCounter,    }
})
```


```

# NOW UPDATE HOME PAGE WITH NEW ELEMENT
# ..#  ../pages/index.vue
<template>
    <section class="container">
        <p class="counter-row">
            <span class="count">Count: <span class="count-value">{{ store.counter }}</span></span>
            <span class="double">Double: <span class="double-value">{{ store.doubleCount }}</span></span>
        </p>
        <div class="actions">
            <button @click="store.inc">Add</button>
            <button @click="store.dec">Sub</button>
        </div>
    </section>
</template>
<script setup>
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
</script>
<style scoped>
.container { max-width: 1100px; margin: 24px auto; padding: 0 16px }
.counter-row { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; margin: 0 0 12px }
.count-value { font-size: 1.25rem; font-weight: 600 }
.double { margin-left: 0 }
.double-value { font-size: 0.75rem; font-weight: 700 }
.actions button { margin-right: 8px }
</style>
# REDO ABOVE
# What changed:
kept the current layout + store usage
added count and double computed bindings
added inc() / dec() methods that call store.inc() and store.dec()
The page now uses the existing Pinia store with a Vuex-like component structure.

Commit mutations with store.commit('mutationName', payload) and read computed values via computed(() => store.state.x) or store.getters.
For namespaced modules you commit with 'moduleName/mutationName'.
For one-off state patches in Vuex you can use actions (dispatch) which can call mutations internally.
<template>
  <section class="container">
    <p class="counter-row">
      <span class="count">Count: <span class="count-value">{{ count }}</span></span>
      <span class="double">Double: <span class="double-value">{{ double }}</span></span>
    </p>
    <div class="actions">
      <button @click="inc">Add</button>
      <button @click="dec">Sub</button>
    </div>
  </section>
  <div>
    <p>Try again with mutex</p>
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <button @click="inc">+1</button>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useCounterStore } from '~/stores/counter'
export default {
  setup() {
    const store = useCounterStore()
    const count = computed(() => store.counter)
    const double = computed(() => store.doubleCount)
    function inc() {
      store.inc()
    }
    function dec() {
      store.dec()
    }
    return { store, count, double, inc, dec }
  }
}
</script>
<style scoped>
.container { max-width: 1100px; margin: 24px auto; padding: 0 16px }
.counter-row { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; margin: 0 0 12px }
.count-value { font-size: 1.25rem; font-weight: 600 }
.double { margin-left: 0 }
.double-value { font-size: 0.75rem; font-weight: 700 }
.actions button { margin-right: 8px }
</style>


