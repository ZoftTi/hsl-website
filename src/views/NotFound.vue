<template>
  <div class="not-found">
    404 Not Found
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
  min-height: 550px;

  padding: 60px 0 40px;
}
</style>
