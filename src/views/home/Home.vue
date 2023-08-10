<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 mb-lg-12 mb-4">
        <!-- preciso corrigir isso aqui-->
      </div>
      <div class="col-lg-6">
        <carousel />
      </div>
    </div>
  </div>
  <div class="card-header">
    <h4 class="font-weight-bolder">Qual será o próximo Role?</h4>
    <p class="mb-0">procure já</p>
  </div>
  <div class="card-body col-lg-6">
    <form role="form-control-lg" @submit.prevent="signInButtonPressed">
      <argon-input v-model="search" type="search" placeholder="Pesquise ...." />
    </form>
  </div>
  <div class="grid">
    <div class="row">
      <div class="row">
        <div
          v-for="(hobbie, index) in hobbies"
          class="col-md-4 mt-5"
          v-bind:key="index"
        >
          <default-info-card
            :classIcon="temp.classIcon"
            :title="hobbie.name"
            :desc="hobbie.description"
            :price="temp.people"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "../components/Carousel.vue";
import DefaultInfoCard from "../../examples/Cards/DefaultInfoCard.vue";
import ArgonInput from "../../components/ArgonInput.vue";
import hobbierRequest from "../../requests/hobbies";

export default {
  name: "home",
  data() {
    return {
      user: {},
      temp: {
        classIcon: "text-white fas fa-landmark",
        people: "+20 pessoas",
      },
      hobbies: {},
    };
  },
  components: {
    Carousel,
    DefaultInfoCard,
    ArgonInput,
  },
  beforeMount() {
    hobbierRequest
      .list()
      .then((resp) => (this.hobbies = resp.data.data))
      .catch((error) => console.log(error));
  },
};
</script>
