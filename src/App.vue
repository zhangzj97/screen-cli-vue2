<template>
  <div id="app"><router-view /></div>
</template>

<script>
// TODO 键盘 切换 路由
// import KeyboardRouter from '@/vender/ztools/KeyboardRouter'

export default {
  name: 'App',
  data() {
    return {
      // keyRouter: {},
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // KeyboardRouter().init();       
    },
  },
}
</script>
