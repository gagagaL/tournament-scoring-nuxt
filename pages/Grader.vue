<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          採点者ページ
        </v-card-title>
        <span>{{score}}</span>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
            @click="one"
          >1</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
            @click="two"
          >2</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
            @click="three"
          >3</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
            @click="zero"
          >Reset</v-btn>
      </p>
        <p>
        <v-btn
          color="danger"
          outlined
          block
          elevation="20"
          to="/grader"
          @click.stop="dialog = true"
        >OK</v-btn>
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
            以下の点数で確定しますか？
          </v-card-title>

          <v-card-text>
            {{score}}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Disagree
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
export default {
    el: '#buttons',
    data() {
      return {
        score: 0,
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
    },
    created: function() {
    },
}
</script>
