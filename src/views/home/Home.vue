
<template src="./template.vue"></template>


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
