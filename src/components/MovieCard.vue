<template>
  <v-card @click="getId(id)">
    <v-img
      class="white--text align-end text-center"
      :src="img === 'N/A' ? sinImg : img"
      height="300"
    >
      <v-card-subtitle class="white--text backgroundCard">
        <p>{{ title }}</p>
        <p>{{ year }}</p>
      </v-card-subtitle>
    </v-img>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "MovieCard",
  props: {
    title: {
      type: String,
      default: "titulo"
    },
    year: {
      type: [Number, String],
      default: 2020
    },
    img: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    },
    id: {
      type: String,
      default: "tt7286456"
    }
  },
  data() {
    return {
      sinImg:
        "https://i2.wp.com/www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png?fit=862%2C1104&ssl=1"
    };
  },
  methods: {
    ...mapActions(["getId"])
  }
};
</script>
<style>
.backgroundCard {
  background-color: #332e2ebf;
}
p {
  margin: 0px !important;
}
</style>
