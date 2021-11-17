<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr />
    <p>
      <b>Id:</b>
      {{ product.id }}
    </p>
    <p>
      <b>Name:</b>
      {{ product.name }}
    </p>
    <p>
      <b>Price:</b>
      {{ product.price }}
    </p>
    <p>
      <b>Descripton:</b>
      {{ product.description }}
    </p>
    <p><button v-on:click="destroyProduct()">Delete Product</button></p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "show products",
      product: {},
    };
  },
  created: function () {
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      console.log("get product");
      axios.get(`/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    },
    destroyProduct: function () {
      console.log("deleting product...");
      axios.delete(`/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/products");
      });
    },
  },
};
</script>
