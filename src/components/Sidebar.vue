<template>
  <div class="container-sidebar">
    <img class="logo" src="../assets/logo.svg" alt="logo" />

    <div class="content-sidebar">
      <img
        src="../assets/location.svg"
        alt="Localização"
        v-on:click="redirectTo('/dashboard/cities')"
      />
      <img
        src="../assets/categories.svg"
        alt="Categorias"
        v-on:click="redirectTo('/dashboard/categories')"
      />
      <img
        src="../assets/comments.svg"
        alt="Comentários"
        v-on:click="redirectTo('/dashboard/comments')"
      />
    </div>

    <img class="logout" src="../assets/logout.svg" alt="logout" />
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    redirectTo(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style scoped>
.container-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f25d27;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 36px;
  height: 100vh;
}

img {
  cursor: pointer;
  transition: filter 0.3s;
}

img:hover {
  filter: brightness(0.8);
}

.logo {
  width: 24px;
  height: 48px;
}

.content-sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 46px;
}

.content-sidebar img {
  width: 24px;
  height: 24px;
}

.logout {
  width: 24px;
  height: 24px;
}
</style>
