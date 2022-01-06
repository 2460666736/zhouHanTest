<!--
 * @Version: 2.0
 * @Autor: Zhou Han
 * @Date: 2022-01-05 19:59:01
 * @LastEditors: Zhou Han
 * @LastEditTime: 2022-01-05 20:06:58
 * @Description: file content
-->
<template>
  <div id="app">
    <zh-input />
  </div>
</template>

<script>
import ZhInput from './components/ZhInput.vue'

export default {
  name: 'App',
  components: {
    ZhInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
