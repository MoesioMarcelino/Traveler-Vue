<template>
  <div class="overlay">
    <label v-if="label.length && value.length" :for="name">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="name"
      :class="{
        'top-left': radius.topLeft,
        'top-right': radius.topRight,
        'bottom-left': radius.bottomLeft,
        'bottom-right': radius.bottomRight,
        'label-visible': label.length && value.length,
      }"
      v-model="value"
      autocomplete
      @change="$emit('changed', { value: $event.target.value, type })"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data: () => ({
    value: "",
  }),
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    radius: {
      type: Object,
      default: () => ({
        topLeft: { type: [Boolean, undefined] },
        topRight: { type: [Boolean, undefined] },
        bottomLeft: { type: [Boolean, undefined] },
        bottomRight: { type: [Boolean, undefined] },
      }),
    },
    name: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.overlay {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

label {
  position: absolute;
  top: 16px;
  left: 24px;
  z-index: 2;
  font-size: 12px;
  color: #a0acb3;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

input {
  height: 80px;
  width: 100%;
  padding: 24px;
  border: 1px solid #dce2e6;
  background-color: #ffffff;

  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #617480;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.label-visible {
  padding: 24px 24px 8px 24px;
}

input::placeholder {
  color: #a0acb3;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
}

.top-left {
  border-top-left-radius: 10px;
}
.top-right {
  border-top-right-radius: 10px;
}
.bottom-right {
  border-bottom-right-radius: 10px;
}
.bottom-left {
  border-bottom-left-radius: 10px;
}
</style>
