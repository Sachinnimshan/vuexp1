<template>
  <div class="col-3 mt-3">
      <div class="card text-left h-100">
        <img class="w-100" src="https://via.placeholder.com/150px100" alt="">
        <div class="card-body">
          <h4 class="card-title">
              <router-link :to="{name: 'ProductScreen', params: {id: 23}}">Product Title</router-link>
          </h4>
          <strong>$25</strong>
          <p class="card-text">
              Hello Sachin Nimshan
          </p>
        </div>
        <div class="px-4 pb-3"><button class="btn btn-primary">Add To Cart</button></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard"

}
</script>

<style>

</style>