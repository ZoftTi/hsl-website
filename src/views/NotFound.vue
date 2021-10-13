<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <div>
      <a href="javascript:;" @click="$router.go(-1)">上一页</a>
      <router-link to="/home">回到首页</router-link>
      </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, inject } from "vue"
export default defineComponent({
  name: "App",
  setup() {
    inject("toggleCarouselShow")()

    onBeforeUnmount(() => {
      inject("toggleCarouselShow")()
    })

    return {}
  },
})
</script>

<style lang="less" scoped>
.not-found {
  max-width: 1200px;
  width: 100%;
  margin: 60px auto 0;
  min-height: 70vh;

  padding: 0px 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
    
    a {
      padding: 0 10px;

      cursor: pointer;
    }
  }
}
</style>
