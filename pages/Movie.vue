<template>
  <v-container>
    <template v-if="sum === 0" >
    <v-row class="text-center">
      <v-col cols="3" class="mb-3 text-center">
        <h1>
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
  </template>
    <v-row v-if="sum === 0" class="text-center">
      <video
        autoplay
        src="~/assets/81.mov"
      >
      </video>
    </v-row>
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
    }
  }
}
</script>
