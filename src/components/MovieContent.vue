<template>
  <v-content>
    <v-container>
      <span v-if="data.totalResults">
        {{ data.totalResults }} results for "{{ search }}"
      </span>
      <v-row>
        <v-col
          v-for="movie in data.Search"
          :key="movie.index"
          cols="12"
          md="3"
          sm="4"
        >
          <MovieCard
            :title="movie.Title"
            :year="movie.Year"
            :img="movie.Poster"
            :id="movie.imdbID"
          />
        </v-col>
      </v-row>
      <MoviePopupInfo />
    </v-container>
    <v-footer v-if="maxPagination > 1">
      <v-pagination
        v-model="page"
        :total-visible="7"
        :length="maxPagination"
        @input="setPAgination"
      ></v-pagination>
    </v-footer>
  </v-content>
</template>
<script>
import MovieCard from "../components/MovieCard";
import MoviePopupInfo from "../components/MoviePopupInfo";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "MovieContent",
  data() {
    return {
      page: 1
    };
  },
  methods: {
    ...mapMutations(["setData"]),
    ...mapActions(["getData"]),
    setPAgination() {
      this.setData([]);
      this.getData(this.page);
    }
  },
  components: {
    MovieCard,
    MoviePopupInfo
  },
  computed: {
    ...mapState(["data", "search", "maxPagination"])
  }
};
</script>
