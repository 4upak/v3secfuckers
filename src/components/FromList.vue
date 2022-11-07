<template>
  <v-list density="compact">
    <v-list-subheader>From Currencies</v-list-subheader>
    <v-list-item
      v-for="(item, i) in $store.getters.getCurrenciesFromLists"
      :key="i"
      :value="item"
      active-color="primary"
    >
      <v-list-item-title v-text="item.name"></v-list-item-title>
    </v-list-item>
  </v-list>




</template>

<script>
export default {
  name: "FromList",
  data: () => ({
    fromSelectedItem: 0,
  }),

}
</script>

<style scoped>

</style>
