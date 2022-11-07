<template>
  <v-list>
    <v-subheader>From</v-subheader>
    <v-list-item-group
        v-model="fromSelectedItem"
        color="primary"
    >
      <v-list-item
          v-for="(item, i) in $store.getters.getCurrenciesFromLists"
          :key="i"
      >

        <v-list-item-content>
          <v-list-item-title v-text="item.name+'['+item.code_name+']'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "FromList",
  data: () => ({
    fromSelectedItem: 0
  }),

}
</script>

<style scoped>

</style>