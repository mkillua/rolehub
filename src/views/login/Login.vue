<template src="./template"/>

<script>
import ArgonInput from "../../components/ArgonInput.vue";
import ArgonSwitch from "../../components/ArgonSwitch.vue";
import ArgonButton from "../../components/ArgonButton.vue";
import useVuelidate from '@vuelidate/core'
import user from "../../requests/user";

export default {
  name: "login",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  setup () {
    return { 
      v$: useVuelidate()
    }
  },
  data() {
    return {
      auth: {
        email: '',
        password: ''
      },
			authenticated: true
    }
  },
  methods: {
    async authenticate() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      
      user.authenticate(this.auth) 
      .then((response) => {
        this.$store.commit('setUser', response.data.user)
				this.$store.commit('setToken', response.data.authorisation)
				this.$router.push('/home')

      }).catch((error) => {
				 if (error.response.status == 401) {
					this.authenticated = false;
				 }
			})
		}
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  }
};
</script>
