<template>
  <div>
    <button :class="{checked}" @click="toggle"><span></span></button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup(){
    const checked = ref(true)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return {
      checked, toggle
    }
  }
}
</script>
<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  button.checked{
    background: blue;
  }
  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  button:focus{ outline: none;}
</style>