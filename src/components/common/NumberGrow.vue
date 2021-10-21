<template>
  <div class="number-grow-warp">
    <span
      ref="numberGrow"
      :data-time="time"
      class="number-grow"
      :data-value="value"
      >0</span
    >
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue"
export default defineComponent({
  props: {
    time: {
      type: Number,
      default: 2,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const numberGrow = ref(null)

    onMounted(() => {
      numberGrowFun(numberGrow.value)
    })

    const numberGrowFun = (ele) => {
      const step = (props.value * 10) / (props.time * 1000)
      let current = 0
      let start = 0
      let t = setInterval(() => {
        start += step
        if (start > props.value) {
          clearInterval(Number(t))
          start = props.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start
        ele.innerHTML = current
          .toFixed(0)
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,")
      }, 0.01)
    }
    return {
      numberGrow,
    }
  },
})
</script>

<style>
.number-grow-warp {
  transform: translateZ(0);
}
.number-grow {
}
</style>
