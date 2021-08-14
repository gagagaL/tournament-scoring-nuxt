<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
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
  </v-row>
</template>
<script>
export default {
  methods: {
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
