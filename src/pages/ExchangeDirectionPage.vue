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
              {{from_direction}} - {{to_direction}}
              <rates-table />
            </v-card-text>
          </v-responsive>
        </v-card>
      </v-col>



    </v-row>


  </v-container>
</template>

<script>

import LeftBar  from "@/components/LeftBar";
import RatesTable from "@/components/RatesTable";

export default {
  name: "MainPage",
  components: {
    'left-bar': LeftBar,
    'rates-table': RatesTable,
  },
  data () {
    return {
      name: 'Currency Converter',
      from_direction: this.$route.params.from_code,
      to_direction: this.$route.params.to_code,
      rates:[],
    }
  },
  mounted() {
    this.$store.dispatch('fetchCurrenciesLists')
    this.$store.dispatch('fetchRates', {
      from_code: this.from_direction,
      to_code: this.to_direction,
    })
  },


}
</script>

<style scoped>
.text-center {
  text-align: center;
  color:#4070f4
}

</style>
