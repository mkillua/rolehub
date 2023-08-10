<template src="./template.vue" />

<script>
import AppFooter from "../../examples/PageLayout/Footer.vue";
import ArgonInput from "../../components/ArgonInput.vue";
import ArgonCheckbox from "../../components/ArgonCheckbox.vue";
import ArgonButton from "../../components/ArgonButton.vue";
import ArgoSelect from "../../components/ArgoSelect.vue";
import useVuelidate from "@vuelidate/core";
import { useStore } from "../../store";
import user from "../../requests/user";
import { required, email, minLength } from "@vuelidate/validators";
import { computed } from "vue";

export default {
  name: "register",
  components: {
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
    ArgoSelect,
  },
  setup() {
    const store = useStore();
    return {
      v$: useVuelidate(),
      userState: computed(() => store.state.user),
      store,
    };
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: "",
      },
      showlert: false,
      gender: [
        {
          id: 1,
          name: "masculino",
          value: "male",
        },
        {
          id: 2,
          name: "feminino",
          value: "female",
        },
      ],
    };
  },
  methods: {
    async signInButtonPressed() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      user.create(this.user).then((response) => {
        this.store.commit("setUser", response.data);
        console.log(this.userState.name);
      });
    },
  },
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
        password_confirmation: {
          required,
          min: minLength(6),
        },
        name: {
          required,
          min: minLength(3),
          $message: "coloque 3 letra ai irmão",
        },
        gender: {
          required,
        },
      },
    };
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  },
};
</script>
