<template>
  <div class="container">
    <div class="content image" />
    <div class="content login-content">
      <Title title="Fazer login" class="title" />
      <form @submit="onSubmit">
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

        <PrimaryButton label="fazer login" type="submit" :disabled="false" />
      </form>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue"
import Title from "../components/Title.vue"
import PrimaryButton from "../components/PrimaryButton.vue"

export default {
  name: "Login",
  components: { Input, Title, PrimaryButton },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault()

      // if (!this.email || !this.password) {
      //   return
      // }

      console.log("submit")
    },
  },
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
  background-size: cover;
}

.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  background-color: #f5f8fa;
}

.title {
  margin-bottom: 44px;
}

form {
  width: 90%;
}

input {
}

button {
  margin-top: 32px;
}
</style>
