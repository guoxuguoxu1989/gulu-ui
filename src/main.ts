import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWold from './components/HelloWorld.vue'
const history  = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: HelloWold }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
