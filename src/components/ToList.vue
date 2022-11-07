<template>
  <v-list>
    <v-subheader>To</v-subheader>
    <v-list-item-group
        v-model="toSelectedItem"
        color="primary"
    >
      <v-list-item
          v-for="(item, i) in $store.getters.getCurrenciesToLists"
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
  name: "ToList",
  data: () => ({
    toSelectedItem: 0
  }),
}
</script>

<style scoped>

</style>