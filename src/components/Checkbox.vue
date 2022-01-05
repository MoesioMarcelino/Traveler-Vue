<template>
  <div class="container-checkbox">
    <input type="checkbox" name="remember" id="remember" :v-model="value" />
    <label class="label-checkbox" for="remember">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
}
</script>

<style>
.container-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

input {
  height: 24px;
  width: 24px;
}

.label-checkbox {
  margin-left: 16px;
  cursor: pointer;
}
</style>
