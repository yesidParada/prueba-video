<template>
  <v-row justify="center">
    <v-dialog v-model="enabledPopup" persistent max-width="700">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                class="white--text align-end text-center"
                :src="detail.Poster === 'N/A' ? sinImg : detail.Poster"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-title>{{ detail.Title }}</v-card-title>
              <v-card-subtitle>{{ detail.Year }}</v-card-subtitle>
              <v-card-title>
                <v-rating
                  :value="parseInt(detail.imdbRating)"
                  dense
                  half-increments
                  readonly
                  length="10"
                  color="amber"
                  size="14"
                ></v-rating>
              </v-card-title>
              <v-card-subtitle>
                <v-chip
                  class="ma-2"
                  v-for="item in detail.Genre"
                  :key="item.index"
                >
                  {{ item }}
                </v-chip>
              </v-card-subtitle>
              <v-card-subtitle>{{ detail.Actors }}</v-card-subtitle>
              <v-card-text>
                {{ detail.Plot }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  outlined
                  tile
                  @click="setEnabledPopup(false)"
                >
                  close
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "MoviePopupInfo",
  data() {
    return {
      sinImg:
        "https://i2.wp.com/www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png?fit=862%2C1104&ssl=1"
    };
  },
  methods: {
    ...mapMutations(["setEnabledPopup"])
  },
  computed: {
    ...mapState(["enabledPopup", "detail"])
  }
};
</script>
