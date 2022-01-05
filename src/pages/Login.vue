<template>
  <div class="container">
    <div class="content">
      <div class="image" />
    </div>
    <div class="content">
      <div class="login-content">
        <Title title="Fazer login" class="login-title" />
        <form @submit="onSubmit">
          <Input
            label="E-mail"
            name="email"
            placeholder="E-mail"
            :radius="{ topLeft: true, topRight: true }"
            type="email"
            required
            :v-model="email"
            @changed="onInputChanged"
          />
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            :radius="{ bottomLeft: true, bottomRight: true }"
            type="password"
            required
            v-model="password"
            @changed="onInputChanged"
          />

          <PrimaryButton
            label="Acessa plataforma"
            type="submit"
            :disabled="disableButton"
          />
        </form>

        <div class="additional-info">
          <Checkbox label="Lembrar-me" class="checkbox" />
          <span class="forgot-password">Esqueci minha senha</span>
        </div>

        <div class="alert">
          <img src="../assets/alert.svg" alt="alert" />
          <span>Acesso restrito à sócios e moderadores</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue"
import Title from "../components/Title.vue"
import PrimaryButton from "../components/PrimaryButton.vue"
import Checkbox from "../components/Checkbox.vue"

export default {
  name: "Login",
  components: { Input, Title, PrimaryButton, Checkbox },
  data: () => ({
    email: "",
    password: "",
    disableButton: false,
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.email || !this.password) {
        return
      }

      this.$router.push("/login")
    },
    onInputChanged(props) {
      if (props.type === "email") {
        this.email = props.value
      } else if (props.type === "password") {
        this.password = props.value
      }
    },
  },
  updated() {
    if (!this.email || !this.password) {
      this.disableButton = true
      return
    }

    this.disableButton = false
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f8fa;
}

.image {
  background-image: url("../assets/login-image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: fixed;
  width: inherit;
  height: inherit;
}

.login-content {
  width: 100%;
  max-width: 600px;
  padding: 80px;
}

form {
  margin-top: 50px;
}

button {
  margin-top: 32px;
}

.additional-info {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox {
  color: #a0acb2;
}

.forgot-password {
  color: #a0acb2;
  cursor: pointer;
}

.alert {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.alert img {
  margin-right: 28px;
}

.alert span {
  font-size: 14px;
  line-height: 22px;
  color: #617480;
}
</style>
