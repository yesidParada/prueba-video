<template>
  <v-app-bar color="primary" dense dark height="90">
    <v-toolbar-title>Movie List</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="inputSearch">
      <v-text-field
        label="Search"
        @input="searchData"
        outlined
        append-icon="mdi-magnify"
        hide-details="false"
        dense
        rounded
      >
      </v-text-field>
      <v-tooltip v-model="showTooltip" bottom color="warning">
        <template v-slot:activator="{ on }">
          <v-radio-group row dense v-on="on">
            <v-radio
              label="Movies"
              value="movie"
              @change="selectType('movie')"
            ></v-radio>
            <v-radio
              label="Series"
              value="series"
              @change="selectType('series')"
            ></v-radio>
          </v-radio-group>
        </template>
        <span>Seleccione una opción</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "MoviHeader",
  data() {
    return {
      showTooltip: false
    };
  },
  methods: {
    /**
     * Declare vuex methods
     * @actions getData
     * @mutations setType
     * @mutations setSearch
     * @mutations setData
     */
    ...mapActions(["getData"]),
    ...mapMutations(["setType", "setSearch", "setData"]),
    searchData(value) {
      this.setSearch(value);
      if (value.length >= 3) {
        if (this.type.length > 0) {
          this.getData();
        } else {
          this.showTooltip = true;
        }
      } else {
        this.setData([]);
      }
    },
    selectType(value) {
      this.setType(value);
      if (this.search.length >= 3) {
        this.showTooltip = false;
        this.getData();
      }
    }
  },
  computed: {
    /**
     * Declare vuex state
     * @mutations type
     * @mutations search
     */
    ...mapState(["type", "search"])
  }
};
</script>
<style>
.v-text-field__details {
  display: none !important;
}
.v-input--radio-group__input {
  padding-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputSearch {
  padding-top: 15px;
}
</style>
