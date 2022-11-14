<template>
  <v-text-field
    label="To currency"
    v-model="ToSearchItem"
    @input="searchTo"

  >
  </v-text-field>
  <template
    v-for="(item, i) in getCurrenciesToLists"
    v-if="ToSearchItem.length > 0"

  >
    <template
      :key="i"
      v-if="getCurrenciesToLists.length > 0 && item.active == true"
    >
      <v-list density="compact">
        <template v-for="(currency, j) in item.tag_currencies">
          <v-list-item
            :key="j"
            :value="currency"
            active-color="primary"
            @click="this.setToCode(currency.code_name)"
            v-if = "currency.active == true"
          >
            <v-list-item-title v-text="currency.name"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>

    </template>
  </template>



</template>

<script>

import { mapActions, mapGetters } from "vuex";
export default {
  name: "ToList",
  data: () => ({
    fromSelectedItem: 0,
    ToSearchItem: "",
  }),
  computed: {
    ...mapGetters(["getCurrenciesToLists"]),
  },
  methods: {
    ...mapActions(["setToCode"]),
    searchTo() {
      this.$store.dispatch("searchTo", this.ToSearchItem);
    },
  },

}
</script>

<style scoped>

</style>
