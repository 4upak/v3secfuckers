<template>
  <div>
    <v-card
      v-for="(exchanger, i) in getTopExchangers"
      :key="i"
      style="margin-bottom: 50px"

    >
      <v-card-title>
        {{ exchanger.name }}
      </v-card-title>
      <v-card-subtitle>
        Number of exchange directions: {{ exchanger.rates }}
      </v-card-subtitle>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">
            Give
          </th>
          <th class="text-left">
            Get
          </th>
          <th class="text-left">
            Reserve
          </th>
        </tr>
        </thead>
        <tbody>

        <tr
          v-for="item in exchanger.popular_rates"
          :key="item.id"
        >
          <td>{{ item.from_rate}} <span class="from_currency">{{item.from_currency_name}}</span><br>
            <span class="min"><b>Min:</b> {{item.min}}</span>&nbsp;<span class="max"><b>Max:</b> {{item.max}}</span>
          </td>
          <td>{{ item.to_rate}} <span class="to_currency">{{item.to_currency_name}}</span></td>
          <td>{{ item.reserve}}</td>
        </tr>

        </tbody>
      </v-table>

    </v-card>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TopExchangers",
  computed: {
    ...mapGetters(["getTopExchangers"]),
  },
  methods: {
    ...mapActions(["setTopExchangers"]),
  },
  mounted() {
    this.$store.dispatch('fetchTopExchangers')
  },

}
</script>

<style scoped>
span.from_currency, span.to_currency{
  font-size: 12px;
  color: #888888;
}
span.min, span.max{
  font-size: 12px;
  color: #888888;
}
</style>
