<template>
    <div class="page-container mx-auto my-5 flex">
      <SideNav />
      <router-view></router-view>
    </div>
</template>


<script setup>
import SideNav from './components/SideNav.vue'

</script>

<style scoped>
.page-container {
    width: 1440px;
    height: 1386px;
    background-color: white;
    border-radius: 20px;
}

</style>
