<template>
   <div>
       <nav class="navbar navbar-expand navbar-dark bg-dark p-3">
        <div class="container">
               <div class="nav navbar-nav">
               <a class="nav-item nav-link active" href="#">Home</a>
               <a class="nav-item nav-link" href="#">Products</a>
               </div>
           <div>
               <div class="dropdown open">
                   <button class="btn btn-primary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">
                               0.00 Cart
                           </button>
                   <div><MiniCart/></div>
               </div>
           </div>
        </div>
       </nav>
   </div>
</template>

<script>
import MiniCart from './MiniCart.vue';
export default {
    name: 'AppHeader',
    components:{
        MiniCart
    }
}
</script>