<template>


  <v-card
    v-for="(item, i) in getCurrenciesToLists"
    :key="i"
  >
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-list density="compact">
      <v-list-item
        v-for="(currency, i) in item.tag_currencies"
        :key="i"
        :value="currency"
        active-color="primary"
        @click="this.setToCode(currency.code_name)"
      >
        <v-list-item-title v-text="currency.name"></v-list-item-title>
      </v-list-item>
    </v-list>

  </v-card>




</template>

<script>

import { mapActions, mapGetters } from "vuex";
export default {
  name: "ToList",
  data: () => ({
    fromSelectedItem: 0,
  }),
  computed: {
    ...mapGetters(["getCurrenciesToLists"]),
  },
  methods: {
    ...mapActions(["setToCode"]),
  },

}
</script>

<style scoped>

</style>
