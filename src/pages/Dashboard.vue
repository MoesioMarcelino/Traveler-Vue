<template>
  <div class="dashboard-container-content">
    <Sidebar />

    <div class="content-pages-dashboard">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"

export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
}
</script>

<style scoped>
.content-pages-dashboard {
  margin-left: 96px;
  background-color: #f5f8fa;
  height: 100vh;
}
</style>
