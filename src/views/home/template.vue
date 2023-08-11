<template>
    <div class="container-fluid position-relative">
      <div class="row row-center">
        <div class="col-lg-8 mb-4 ">
          <div class="card-header text-center mt-5">
            <h1 class="font-weight-bolder">Qual será o próximo Role?</h1>
            <p>procure já</p>
            <form class="form-center mt-6" role="form-control-lg" @submit.prevent="signInButtonPressed">
              <argon-input
                v-model="search"
                type="search"
                size="lg"
                placeholder="Pesquise ...."
              />
            </form>
          </div>
        </div>
  
        <div class="col-lg-4">
          <carousel />
        </div>
      </div>
    </div>
    <hr/>
    <div class="container-fluid">
      <div class="grid">
        <div class="row col-12 ">
          <div
            v-for="(hobbie, index) in hobbies"
            :class="index > 5 ? 'col-md-2 mt-8' : 'col-md-2 mt-4'"
            v-bind:key="index"
          >
            <default-info-card
              :classIcon="temp.classIcon"
              :title="hobbie.name"
              :desc="hobbie.description"
              :price="temp.people"
            />
  
            <argon-button fullWidth color="info" variant="gradient" class=""
              >Juntar-se a</argon-button
            >
          </div>
        </div>
      </div>
    </div>
  </template>