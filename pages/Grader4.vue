<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline text-lg-center">
          採点者No.4
        </v-card-title>
        <h2 v-if="score >= 1" class="text-lg-center">{{score}}点</h2>
        <h2 v-else class="text-lg-center">点数を選んでください</h2>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/Grader4"
            @click="one"
          >1</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/Grader4"
            @click="two"
          >2</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/Grader4"
            @click="three"
          >3</v-btn>
        </p>
        <p v-if="score > 0">
          <v-btn
            class="mt-10"
            color="danger"
            outlined
            block
            elevation="20"
            to="/Grader4"
            @click.stop="dialog = true"
          >送信する</v-btn>
        </p>
        <v-card-actions>
        </v-card-actions>
      </v-card>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            {{score}}点で確定しますか？
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="red"
              @click="dialog = false"
            >
              やり直す
            </v-btn>

            <v-btn
              color="green darken-1"
              @click="sent"
            >
              確定する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="confirm"
        max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            送信しました
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              @click="ok"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      score: 0,
      dialog: false,
      confirm: false,
      result4:0
    }
  },
  mounted() {
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
    sent: function() {
      this.$fire.database.ref('result4').set(
        this.result4 = this.score
      )
      this.dialog = false;
      this.confirm = true;
      this.score = 0;
    },
    ok : function() {
      this.confirm = false;
    }
  },
  created: function() {
  },
}
</script>
