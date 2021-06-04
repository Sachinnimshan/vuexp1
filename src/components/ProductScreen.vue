<template>
  <div class="row mt-5">
    <div class="col-4">
      <img class="w-100" src="https://via.placeholder.com/150px100" alt=""/>
    </div>
    <div class="col-8">
      <h1>Product Title</h1>
      <h3>$35</h3>
      <input type="text" class="text-center col-1 mr-2 p-1"/>
      <button class="btn btn-primary">Add To Cart</button>
    <p class="mt-4">Lorum Epsum Dolor sit amet consectetur</p>
    </div>

  </div>
</template>

<script>
export default {
    name: "ProductScreen",
    props: ["id"]


}
</script>

<style>

</style>