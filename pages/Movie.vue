<template>
  <div :style="{height: height + 'px'}" class="header-img">
  <v-container fluid>
    <template v-if="sum === 0" >
    <v-row :style="{height: height + 'px'}" justify="center" align="center">
      <v-col cols="3" class="mb-3 text-center">
        <span style="font-size:180px">
          {{score_1}}
        </span>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <span style="font-size:180px">
          {{score_2}}
        </span>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <span style="font-size:180px">
          {{score_3}}
        </span>
      </v-col>
      <v-col cols="3" class="mb-3 text-center">
        <span style="font-size:180px">
          {{score_4}}
        </span>
      </v-col>
    </v-row>
  </template>
    <v-row v-if="sum === 9" class="text-center" justify="center">
    <v-col cols="12">
      <video
        autoplay
        src='9.mp4'
        width="1200"
      >
      </video>
    </v-col>
  </v-row>
    <v-row v-if="sum === 8" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='8.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 1" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='1.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 2" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='2.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 3" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='3.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 4" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='4.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 6" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='6.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 12" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='12.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 16" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='16.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 18" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='18.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 24" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='24.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 27" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='27.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 36" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='36.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 54" class="text-center" justify="center">
      <v-col cols="12">
        <video
          autoplay
          src='54.mp4'
          width="1200"
        >
        </video>
      </v-col>
    </v-row>
    <v-row v-if="sum === 81" :key="sum" justify="center">
      <v-col align="center">
        <video
          autoplay
          src="81.mp4"
          width="1200"
          ref="previewVideo"
        >
        </video>
      </v-col>
    </v-row>
  </v-container>
  </div>
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
      dialog: false,
      height: 0
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  mounted() {
    console.log(this.height)
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
    handleResize () {
      this.height = window.innerHeight
    }
  }
}
</script>
