<template>
  <div class="container-cities">
    <nav class="">
      <Title label="Cidades" />
      <PrimaryButton label="+ Adicionar um perfil" type="button" />
    </nav>

    <div class="container-card-cities">
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import PrimaryButton from "../components/PrimaryButton.vue"
import CardCity from "../components/CardCity.vue"

export default {
  name: "Cities",
  components: { Title, PrimaryButton, CardCity },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px 40px;
  background-color: #fff;
  border: 1px solid #dce2e6;
  column-gap: 48px;
  row-gap: 12px;
}

nav button {
  width: fit-content;
  height: 48px;
  padding: 12px 24px;
}

.container-card-cities {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
