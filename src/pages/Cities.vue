<template>
  <div class="container-cities">
    <nav class="">
      <Title label="Cidades" />
      <PrimaryButton label="+ Adicionar um perfil" type="button" />
    </nav>

    <div class="container-card-cities" v-if="cities.length > 0">
      <CardCity
        v-for="{ id, title, description, image, count } in cities"
        :key="id"
        :count="count"
        :title="title"
        :description="description"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import { api } from "../services"

import Title from "../components/Title.vue"
import PrimaryButton from "../components/PrimaryButton.vue"
import CardCity from "../components/CardCity.vue"

export default {
  name: "Cities",
  components: { Title, PrimaryButton, CardCity },
  data: () => ({
    cities: [],
    teste: "",
  }),
  mounted() {
    this.loadCities()
  },
  methods: {
    loadCities: async function () {
      const response = await api.get("/cities")
      console.log(response.data)
      this.cities = response.data
    },
  },
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
  overflow-y: auto;
  max-height: 85vh;
}
</style>
