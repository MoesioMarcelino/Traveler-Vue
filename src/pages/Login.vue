<template>
  <div class="container">
    <div class="content image" />
    <div class="content login-content">
      <Input
        label="E-mail"
        name="email"
        placeholder="E-mail"
        :radius="{ topLeft: true, topRight: true }"
        type="email"
        required
        v-model="email"
      />
      <Input
        label="Password"
        name="password"
        placeholder="Password"
        :radius="{ bottomLeft: true, bottomRight: true }"
        type="password"
        required
        v-model="password"
      />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue"

export default {
  name: "Login",
  components: { Input },
  data: () => ({
    email: "",
    password: "",
  }),
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  width: 50vw;
  height: 100vh;
}

.image {
  background-image: url("../assets/login-image.png");
  background-repeat: no-repeat;
  background-position: center;
}

.login-content {
  display: flex;
  flex-direction: column;
}
</style>
