<template>
  <div class="container">
      <h3>Comedy Movie List</h3>
      <ul>
          <li v-for="movie in comedyMovies" :key="movie.id">{{ movie.title }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ComedyMovieList',
    computed: {
        comedyMovies() {
            return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>