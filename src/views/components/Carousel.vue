<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(object, index) in objects"
        v-bind:key="index"
        v-bind:class="index == 0 ? 'carousel-item active' : 'carousel-item'"
        data-bs-interval="10000"
      >
        <img :src="getImgUrl(object.image)" class="img-fluid" alt="" />
        <div class="carousel-caption d-md-block">
          <h5 class="fw-bolder bg-light bg-gradient">{{object.title}}</h5>
          <p class="fw-bolder text-white">{{object.description}}.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      objects: [
        {
          title: "Vem ai o maior encontro de sorvete de Floripa!",
          description: "Junte-se a nós com mais de 200 opções de sorvete",
          image: "sorvete.jpg",
        },
        {
          title: "O campeonato de futevolei começou!",
          description:
            "Reuna-se com os melhores do rio para o campeonato estadual",
          image: "volley.jpg",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imageName) {
      return require("../../assets/img/" + imageName);
    },
  },
};
</script>
