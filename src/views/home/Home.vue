<template>
  <div class="container-fluid">
    <div class="row row-center mt-5">
      <div class="col-lg-8 mb-4">
        <div class="card-header">
          <h1 class="font-weight-bolder">Qual será o próximo Role?</h1>
          <p>procure já</p>
          <form class="form-center  col-6 mt-6" role="form-control-lg" @submit.prevent="signInButtonPressed">
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
          class="col-md-6 mt-4 mw-100"
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
<script>
import Carousel from "../components/Carousel.vue";
import DefaultInfoCard from "../../examples/Cards/DefaultInfoCard.vue";
import ArgonInput from "../../components/ArgonInput.vue";
import hobbierRequest from "../../requests/hobbies";
import ArgonButton from "../../components/ArgonButton.vue";

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
    ArgonButton,
  },
  beforeMount() {
    hobbierRequest
      .list()
      .then((resp) => (this.hobbies = resp.data.data))
      .catch((error) => console.log(error));
  },
};
</script>
