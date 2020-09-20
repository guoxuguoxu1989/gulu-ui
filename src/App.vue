<template>
  <div>导航栏 | <router-link to="/">HelloWorld</router-link> </div>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
