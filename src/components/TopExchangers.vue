<template>
  <div>

    <v-card
      v-for="(exchanger, i) in getTopExchangers"
      :key="i"
      style="margin-bottom: 50px"
      v-if="getTopExchangers.length > 0"

    >
      <v-card-title>
        {{ exchanger.name }}
      </v-card-title>
      <v-card-subtitle>
        Rates: {{ exchanger.rates }}
      </v-card-subtitle>
      <v-table>
        <thead>
        <tr>
          <th>Direction</th>
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
          <td v-if="item.from_currency_name != item.to_currency_name">{{ item.from_currency_name }} -> {{ item.to_currency_name }}</td>
          <td v-if="item.from_currency_name != item.to_currency_name">{{ item.from_rate}}<br>
            <span class="min"><b>Min:</b> {{item.min}}</span><br><span class="max"><b>Max:</b> {{item.max}}</span>
          </td>
          <td v-if="item.from_currency_name != item.to_currency_name">{{ item.to_rate}}</td>
          <td v-if="item.from_currency_name != item.to_currency_name">{{ item.reserve}}</td>
        </tr>

        </tbody>
      </v-table>

    </v-card>

    <v-progress-linear
      v-else
      indeterminate
      color="primary" />

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
span.min, span.max{
  font-size: 12px;
  color: #888888;
}
</style>
