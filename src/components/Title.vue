<template>
  <span>{{ title }}</span>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style>
span {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 32px;
  color: #123952;
}
</style>
