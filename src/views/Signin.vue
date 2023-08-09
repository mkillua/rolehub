<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Bem vindo ao RoleRub</h4>
                  <p class="mb-0">A rede social do Role</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input type="email" placeholder="Email" name="email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="Password" name="password" size="lg" />
                    </div>
                    <argon-switch id="rememberMe">lembrar-me</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                      >Continuar</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Ainda não tem uma conta?
                    <a
                      href="signup"
                      class="text-success text-gradient font-weight-bold"
                    >Crie uma já</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://previews.123rf.com/images/oneinchpunch/oneinchpunch1704/oneinchpunch170400098/75259236-group-of-friends-going-to-surf-at-the-beach.jpg');
          background-size: cover;"
              >
                <span class="mask bg-gradient-warning opacity-6"></span>
                <h4
                  class="mt-6 text-white font-weight-bolder position-relative"
                >"sozinho é bom, em conjunto é muito melhor"</h4>
                <p
                  class="text-white position-relative"
                >Encontre um novo hobbie, um novo amigos, uma nova vida </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
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
};
</script>
