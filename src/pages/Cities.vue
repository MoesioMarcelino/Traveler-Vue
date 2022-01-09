<template>
  <div class="container-cities">
    <nav class="">
      <Title label="Cidades" />
      <PrimaryButton label="+ Adicionar um perfil" type="button" />
    </nav>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import PrimaryButton from "../components/PrimaryButton.vue"

export default {
  name: "Cities",
  components: { Title, PrimaryButton },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  background-color: #fff;
  border: 1px solid #dce2e6;
  column-gap: 24px;
}

nav button {
  width: fit-content;
  height: 48px;
  padding: 12px 24px;
}
</style>
