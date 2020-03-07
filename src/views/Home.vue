<template>
  <div class="home">
    <MovieHeader />
    <MovieContent />
  </div>
</template>

<script>
import MovieHeader from "../components/MovieHeader";
import MovieContent from "../components/MovieContent";

export default {
  name: "Home",
  components: {
    MovieHeader,
    MovieContent
  }
};
</script>
