<template>
  <div class="d-flex align-items-strech flex-wrap">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
  </div>
</template>

<script>
import ProductCard from './ProductCard';
export default {
    name: "ProductList",
    components:{
        ProductCard
    }

}
</script>

<style>

</style>