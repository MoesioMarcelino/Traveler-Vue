<template>
  <div class="card-city-container">
    <img :src="image" class="image-card-city" :alt="description" />

    <div class="content-card-city">
      <span class="title-card-city">{{ title }}</span>
      <span class="count">{{ count }} locais</span>
    </div>

    <div class="actions-card-city">
      <button class="button-edit">edit</button>
      <button class="button-delete">del</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCity",
  props: {
    image: { type: String, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    count: { type: Number, required: true },
  },
}
</script>

<style scoped>
.card-city-container {
  max-width: 256px;
  max-height: 266px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dce2e6;
  border-radius: 16px;

  position: relative;

  overflow: overlay;
}

.image-card-city {
  display: flex;
  flex: 1;
  height: 160px;
}

.content-card-city {
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.title-card-city {
  color: #123952;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}

.count {
  color: #617480;
}

.actions-card-city {
  position: absolute;
  top: 15px;
  right: 15px;

  display: flex;
  column-gap: 4px;
}

.actions-card-city button {
  padding: 8px;
  background-color: #fff;
  border: 1px solid #dce2e6;
}

.button-edit {
  border-radius: 10px 0 0 10px;
}

.button-delete {
  border-radius: 0 10px 10px 0;
}
</style>
