<template>

  <v-container class="lighten-5">
    <!-- title -->
        <h1 class="text-center">White <span class="blue_span">Exchangers</span> monitoring</h1>
    <!-- 3 rows of articles -->
    <h3 class="main_page_subtitle">Our Service helps to make exchanges safely and quickly</h3>
    <v-row
        class="mt-5"

    >
      <v-col cols="12" md="5">
        <left-bar />
      </v-col>
      <v-col cols="12" md="7">
          <v-responsive >
            <top-exchangers />
          </v-responsive>
      </v-col>



    </v-row>


  </v-container>
</template>

<script>

import LeftBar  from "@/components/LeftBar";
import TopExchangers from "@/components/TopExchangers";

export default {
  components: {
    'left-bar': LeftBar,
    'top-exchangers': TopExchangers


  },
  data () {
    return {

      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      name: 'White Exchangers monitoring',
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
}

</style>
