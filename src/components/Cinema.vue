<template>
  <div class="hello">
    <h1>Cinema</h1>
    <router-link class="menu-item" v-bind:to="{ path: '/family' }">Family Movies</router-link>
    <router-link class="menu-item" v-bind:to="{ path: '/comedy' }">Comedy Movies</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Cinema',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-item {
  margin: 10px 15px;
}
</style>
