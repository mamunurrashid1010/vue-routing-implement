# vue-routing-implement
 In this project here i implement vue routing and show that step by step how to implement routing in a vue project.

## Implementation Process

##### 1. Create a new vue app using vitejs
```
npm create vite@latest //then add project name, then select vue, then javascript...
npm install 
npm run dev
```

##### 2. Vue router installation
Run this command in terminal
```
npm install vue-router@4
```

##### 3. Create component (Home.vue,Contact.vue, ...)  in this directory src/components/pages
Home.vue component :
```
<template>
  <div>
    <h1>Home Page</h1>

    <p>Redirect demo</p>
    <button @click="contact">Contact Page</button>
    <button @click="service">Service Page</button>
    <button @click="back">Back</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  methods:{
    contact(){
      this.$router.push('/contact');
    },
    service(){
      this.$router.push('/service');
    },
    back(){
      this.$router.go(-1);
    }
  }
}
```
Service.vue component:
```
<template>
  <div>
    <h1>Service Page</h1>
    <p><router-link to="service/details/1">service 1</router-link></p>
    <p><router-link to="service/details/2">service 2</router-link></p>
    <p><router-link to="service/details/3">service 3</router-link></p>
    <p><router-link to="service/details/4">service 4</router-link></p>
    <p><router-link to="service/details/5">service 5</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data(){
    return{

    }
  }
}
</script>
```
ServiceDetails.vue component:
```
<template>
  <div>
    <h1>Service Details Page</h1>
    <h3>ID : {{id}} </h3>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetails',
  data(){
    return{
        id: this.$route.params.id,
    }
  }
}
</script>
```

##### 4. Create route file ```index.js``` in this directory src/router/index.js and open and write code
Run this command in terminal
```
import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Service from "../components/pages/Service.vue";
import ServiceDetails from "../components/pages/ServiceDetails.vue";
import Contact from "../components/pages/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/service/details/:id',
            name: 'serviceDetails',
            component: ServiceDetails
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})

export default router
```

##### 5. open ```main.js``` file, then import ```index.js``` and add ```.use(router)``` like-
```
import router from "./router/index.js";
createApp(App).use(router).mount('#app') // .use(router) added
```

##### 6. Create component ```Navbar.vue```  in this directory src/components/navbar/Nabvar.vue and add code
```
<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/service">Service</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'Navbar',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#navbar ul li{
  display: inline-block;
  padding: 10px;
  font-size: 25px;
}
</style>
```

##### 7. Open ```App.vue``` file and add ```<router-view/>``` and ```Navbar.vue``` component like
```
<script setup>
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <div id="app">
    <h2>Vue Routing Implement</h2>
    .........
    .........
    <Navbar/>
    <router-view/>
  </div>
</template>
```

##### 8. then open terminal and run ``` npm run dev ``` command to run project.

complete.