<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <p>{{ products }}</p> -->
    <div v-for="product in products">
      <p>
        {{ product.name }}
      </p>
      <router-link v-bind:to="`products/${product.id}`">More info</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Mo-Shopping!",
      products: [],
    };
  },
  created: function () {
    this.productsIndex();
  },
  methods: {
    productsIndex: function () {
      console.log("loading all products!");
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>
