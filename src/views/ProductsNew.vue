<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Create Product</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newProductParams.name" />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" v-model="newProductParams.price" />
      </div>
      <div>
        <label>Descripton</label>
        <input type="text" v-model="newProductParams.description" />
      </div>

      <div>
        <label>Supplier:</label>
        <input type="text" v-model="newProductParams.supplier_id" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newProductParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/products", this.newProductParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
