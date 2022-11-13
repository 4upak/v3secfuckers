<template>
  <v-text-field
    label="From currency"
    v-model="FromSearchItem"
    @input="searchFrom"
  >

  </v-text-field>

  <v-card
      v-for="(item, i) in getCurrenciesFromLists"
      :key="i"
      v-if="getCurrenciesFromLists.length > 0"
  >
    <v-card-title
    >
      {{ item.name }}
    </v-card-title>
    <v-list density="compact">
      <template v-for="(currency, i) in item.tag_currencies">
        <v-list-item
          :key="i"
          :value="currency"
          active-color="primary"
          @click="this.setFromCode(currency.code_name)"
          v-if = "currency.active == true"
        >
          <v-list-item-title v-text="currency.name"

          >

          </v-list-item-title>

        </v-list-item>
      </template>
    </v-list>

  </v-card>
  <v-progress-circular
    v-else
    indeterminate
    color="primary"
  ></v-progress-circular>




</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FromList",

  data: () => ({
    fromSelectedItem: 0,
  }),

  computed: {
    ...mapGetters(["getCurrenciesFromLists"]),
  },
  methods: {
    ...mapActions(["setFromCode"]),
    searchFrom() {
      this.$store.dispatch("searchFrom", this.FromSearchItem);
    },
  },

}
</script>

<style scoped>

</style>
