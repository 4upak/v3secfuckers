<template>


  <v-table v-if="getRatesResult.length > 0">
    <thead>
    <tr>
      <th class="text-left">
        Exchanger
      </th>
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
      v-for="item in getRatesResult"
      :key="item.id"
    >
      <td>{{ item.exchange.name }}</td>
      <td>{{ item.from_rate}} <span class="from_currency">{{item.from_currency.name}}</span><br>
        <span class="min"><b>Min:</b> {{item.min}}</span><br>
        <span class="max"><b>Max:</b> {{item.max}}</span>
      </td>
      <td>{{ item.to_rate}} <span class="to_currency">{{item.to_currency.name}}</span></td>
      <td>{{ item.reserve}}</td>
    </tr>
    </tbody>
  </v-table>
  <v-progress-linear
    v-else
    indeterminate
    color="primary"
  ></v-progress-linear>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RatesTable",
  data () {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(["getRatesResult"]),
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
