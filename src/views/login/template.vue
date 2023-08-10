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
                <div v-if="!authenticated" class="alert alert-warning alert-dismissible fade show" role="alert">
                      Login e senha incorretos!
                   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <i class=" fa fa-close"></i>
                   </button>
                </div>
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Bem vindo ao RoleRub</h4>
                  <p class="mb-0">A rede social do Role</p>
                </div>
                <div class="card-body">
                  <form role="form"  @submit.prevent="authenticate">
                    <div class="mb-3">
                      <argon-input v-model="auth.email" type="email" placeholder="Email" name="email" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input v-model="auth.password" type="password" placeholder="Password" name="password" size="lg" />
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
                      href="register"
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