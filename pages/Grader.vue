<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          採点者ページ
        </v-card-title>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
          >1</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
          >2</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
          >3</v-btn>
        </p>
        <p>
          <v-btn
            color="primary"
            outlined
            block
            elevation="20"
            to="/grader"
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
            Use Google's location service?
          </v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
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
  data () {
    return {
      dialog: false,
    }
  },
}
</script>
