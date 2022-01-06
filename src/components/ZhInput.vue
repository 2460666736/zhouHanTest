<!--
 * @Version: 2.0
 * @Autor: Zhou Han
 * @Date: 2022-01-05 20:00:56
 * @LastEditors: Zhou Han
 * @LastEditTime: 2022-01-06 09:49:22
 * @Description: 自定义input
-->
<template>
  <div>
    <input :style="{ width: `${width}px`, height: `${height}px`, background }" />
  </div>
</template>
<script>
export default {
  name: "ZhInput",
  props: {
    width: {
      type: [String, Number],
      default: 150
    },
    height: {
      type: [String, Number],
      default: 20
    },
    background: {
      type: String,
      default: () => "#fff"
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>

</style>
