<template>
  <v-list density="compact">
    <v-list-subheader>From Currencies</v-list-subheader>

    <v-list-item
      v-for="(item, i) in getCurrenciesToLists"
      :key="i"
      :value="item"
      active-color="primary"
      @click="this.setToCode(item.code_name)"
    >
      <v-list-item-title v-text="item.name"></v-list-item-title>
    </v-list-item>
  </v-list>




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
