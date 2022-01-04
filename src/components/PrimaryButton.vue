<template>
  <button :type="type" :class="{ disabled: disabled }">{{ label }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "submit",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
button {
  height: 72px;
  background: #f25d27;
  border-radius: 10px;
  padding: 24px;
  width: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;

  border: 0;
  transition: filter 0.4s;
}

button:hover {
  filter: brightness(0.8);
}

.disabled {
  cursor: not-allowed;
}

.disabled:hover {
  filter: brightness(1);
}
</style>
