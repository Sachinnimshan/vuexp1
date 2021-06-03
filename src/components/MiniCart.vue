<template>
    <div class="dropdown-menu" 
    style="min-width:320px; 
    right: 0; 
    left: auto; 
    margin-top: 0.5rem; 
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
    aria-labelledby="triggerId">
        <div>
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>Product Title</strong>
                    <br/>1 x 23
                </div>
                <div>
                    <a href="#" class="badge badge-danger">Remove</a>
                </div>
            </div>
        </div>
        <hr/>

        <div class="d-flex justify-content-between">
            <span>Total: $25</span>
            <a href="">Clear Cart</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "MiniCart"
}
</script>

<style>

</style>