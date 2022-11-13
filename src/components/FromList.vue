<template>
  <v-text-field
    label="From currency"
    v-model="FromSearchItem"
    @input="searchFrom"
  >

  </v-text-field>
  <template
    v-for="(item, i) in getCurrenciesFromLists"
  >
    <v-card

        :key="i"
        v-if="getCurrenciesFromLists.length > 0 && item.active == true"
    >
      <v-card-title
      >
        {{ item.name }}
      </v-card-title>
      <v-list density="compact">
        <template v-for="(currency, j) in item.tag_currencies">
          <v-list-item
            :key="j"
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

  </template>






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
