<template>
  <div>
    <el-menu :router="true" style="height: calc(100vh / 7)" :default-active="routerIndex" mode="horizontal">
      <el-menu-item route="/manual" style="font-size: calc(100vh / 14)" index="1">키보드로</el-menu-item>
      <el-menu-item route="/preset" style="font-size: calc(100vh / 14)" index="2">단어 중 고르기</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    routerIndex(){
      if (this.$route.path == '/manual'){
        return '1';
      } else {
        return '2';
      }
    }
  }
}
</script>
