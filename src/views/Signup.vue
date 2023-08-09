<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
    </div>
  </div>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://static.vecteezy.com/system/resources/thumbnails/002/569/523/original/group-of-friends-at-beach-hanging-out-by-campfire-video.jpg'); background-position: top;"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Bem vindo a roleHub!</h1>
            <p
              class="text-lead text-white"
            >Junte-se a milhares de pessoas com o mesmo hobbie que você.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <div v-if="showlert" class="alert alert-success alert-dismissible fade show" role="alert">
               Cadastro realizado com sucesso
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
              <h5>Cadastre-se</h5>
            </div>
            <div class="card-body">
              <form role="form" @submit.prevent="signInButtonPressed">
                <div class="form-group" :class="{ error: v$.user.name.$errors }">
                  <argon-input v-model="v$.user.name.$model" isRequired type="text" placeholder="Name" aria-label="Name" />
                  <div class="input-errors" v-for="(error, index) of v$.user.name.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
                <argon-input v-model="user.email" isRequired type="email" placeholder="Email" aria-label="Email" />
                <argon-input v-model="user.password" isRequired type="password" placeholder="Password" aria-label="Password" />
                <argon-input v-model="user.password_confirmation" isRequired type="password" placeholder="confirme a senha" aria-label="Password" />
                <ArgoSelect  v-model="user.gender" v-bind:options="gender"/>
                <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree the
                    <a
                      href="javascript:;"
                      class="text-dark font-weight-bolder"
                    >Terms and Conditions</a>
                  </label>
                </argon-checkbox>
                <div class="text-center">
                  <argon-button  fullWidth color="dark" variant="gradient" class="my-4 mb-2">Sign up</argon-button>
                </div>
                <p class="text-sm mt-3 mb-0">
                  Already have an account?
                  <a
                    href="/signup"
                    class="text-dark font-weight-bolder"
                  >Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgoSelect from "@/components/ArgoSelect.vue";
import useVuelidate from '@vuelidate/core'
import user from "../requests/user";
import { required, email, minLength } from '@vuelidate/validators'
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
    ArgoSelect,
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        gender: ''

      },
      showlert: false,
      gender: [{
        id: 1,
        name: "masculino",
        value: 'male'
      },
      {
        id: 2,
        name: "feminino",
        value: 'female'
      }]
    }},
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.add("bg-gray-100");
  },
  methods: {
    async signInButtonPressed() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      
      user.create(this.user) 
      .then(() => this.showlert = true);
    }
  },
  validations() {
    return {
      user: {
        email: {
           required, email ,
        },
        password: {
            required, 
            min: minLength(6)
        },
        password_confirmation: {
            required, 
            min: minLength(6)
        },
        name: {
            required, 
            min: minLength(3),
            $message: 'coloque 3 letra ai irmão'
        },
        gender: {
            required, 
        },
      },
    }
  }
};
</script>
