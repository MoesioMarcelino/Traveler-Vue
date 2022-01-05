<template>
  <Sidebar />
  <router-view path="$router.key" />
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

<style scoped></style>
