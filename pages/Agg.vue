<template style="background-color: #fdffcd">
  <v-container>
    <template>
      <v-row class="text-center">
        <v-col cols="3" class="mb-3 text-center">
          <h1 color="black">
            {{score_1}}
          </h1>
        </v-col>
        <v-col cols="3" class="mb-3 text-center">
          <h1>
            {{score_2}}
          </h1>
        </v-col>
        <v-col cols="3" class="mb-3 text-center">
          <h1>
            {{score_3}}
          </h1>
        </v-col>
        <v-col cols="3" class="mb-3 text-center">
          <h1>
            {{score_4}}
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <h1>
          合計{{sum}}
        </h1>
      </v-row>
      <v-col cols="2" sm="2" md="2">
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            @click="reset"
          >リセットする</v-btn>
        </p>
      </v-col>
    </template>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      score_1: 0,
      score_2: 0,
      score_3: 0,
      score_4: 0,
      sum:0,
      // user_id:1,
      dialog: false
    }
  },
  mounted() {
    // const previewVideo = ref()
    this.$fire.database.ref('result1').on('value', (snapshot) => {
      this.score_1 = snapshot.val();
      this.cul()
    })
    this.$fire.database.ref('result2').on('value', (snapshot) => {
      this.score_2 = snapshot.val();
      this.cul()
    })
    this.$fire.database.ref('result3').on('value', (snapshot) => {
      this.score_3 = snapshot.val();
      this.cul()
    })
    this.$fire.database.ref('result4').on('value', (snapshot) => {
      this.score_4 = snapshot.val();
      this.cul()
    })
  },
  methods: {
    cul: function() {
      this.sum = this.score_1 * this.score_2 * this.score_3 * this.score_4
      // previewVideo.load();
    },
    reset: function() {
      this.$fire.database.ref('result1').set(
        this.resutl1 = 0
      )
      this.$fire.database.ref('result2').set(
        this.resutl2 = 0
      )
      this.$fire.database.ref('result3').set(
        this.resutl3 = 0
      )
      this.$fire.database.ref('result4').set(
        this.resutl4 = 0
      )
    }
  }
}
</script>
