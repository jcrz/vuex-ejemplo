<template>
  <div class="container">
      <h3>Family Movie List</h3>
      <ul>
          <li v-for="movie in familyMovies" :key="movie.id">{{ movie.title }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'FamilyMovieList',
    computed: {
        familyMovies() {
            return this.$store.state.movies.filter(movie => movie.genre === "Family");
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>