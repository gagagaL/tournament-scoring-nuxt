<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="border">
        集計ページ
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <h2>
          {{score_1}}
        </h2>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <h2>
          {{score_2}}
        </h2>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <h2>
          {{score_3}}
        </h2>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <h2>
          {{score_4}}
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  el: '#buttons',
  data() {
    return {
      score_1: 0,
      score_2: 0,
      score_3: 0,
      score_4: 0,
      // user_id:1,
      dialog: false
    }
  },
  methods: {
    one: function () {
      this.score = 1;
    },
    two: function () {
      this.score = 2;
    },
    three: function () {
      this.score = 3;
    },
    zero: function () {
      this.score = 0;
    },
    sent: function() {
      // this.scoreを送る処理
      this.score = 0;
      this.dialog = false;
    }
  },
  created: function() {
  },
}
</script>
