<template>

  <v-container class="lighten-5">
    <!-- title -->
        <h1 class="text-center">{{ name }}</h1>
    <!-- 3 rows of articles -->
    <v-row
        class="mt-5"

    >
      <v-col cols="12" md="5">
        <left-bar />
      </v-col>
      <v-col cols="12" md="7">
        <v-card>
          <v-responsive >
            <v-card-text>
              This card will always be 16:9 (unless you put more stuff in it)
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>



    </v-row>


  </v-container>
</template>

<script>

import LeftBar  from "@/components/LeftBar";

export default {
  name: "MainPage",
  components: {
    'left-bar': LeftBar,


  },
  data () {
    return {

      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      name: 'Currency Converter',
    }
  },
  mounted() {
    this.$store.dispatch('fetchCurrenciesLists')
  }

}
</script>

<style scoped>
.text-center {
  text-align: center;
  color:#4070f4
}

</style>
