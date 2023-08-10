<template>
    <div class="container-fluid">
      <div class="row">
            <div class="col-lg-8 mb-lg-12 mb-4">
                
            </div>
            <div class="col-lg-4">
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
                  <argon-input v-model="user.email" isRequired type="text" placeholder="Pesquise ...." aria-label="Email" />
                </form>
              </div>
    <div class="grid">
    <div class="row">
            <div class="row">
              <div class="col-md-2 mt-5">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>
              <div class="col-md-2 mt-5">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>
              <div class="col-md-2 mt-5">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>
              <div class="col-md-2  mt-5">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
              <div class="col-md-2  mt-5">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
              <div class="col-md-2  mt-5">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
              <div class="col-md-2  mt-5">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
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
  
  export default {
    name: "home",
    data() {
      return {
        user: {},
        salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Bike 50+",
        desc: "Encontro dos 50+ no ibirapuera  para andar de bike",
        price: "+20 pessoas",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
      };
    },
    components: {
      Carousel,
      DefaultInfoCard,
      ArgonInput
    },
  };
  </script>
  