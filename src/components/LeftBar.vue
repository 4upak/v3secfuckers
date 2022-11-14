<template>

  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="#f7fafc"
      height="60px"
    >
      <v-tab value="one">
        <v-icon
          size="large"
          color="grey"
          class="mx-2"
        >
          mdi-view-quilt
        </v-icon>
        Table
      </v-tab>
      <v-tab value="two">
        <v-icon
          size="large"
          color="grey"
          class="mx-2"
        >
          mdi-view-list
        </v-icon>
        List</v-tab>
      <v-tab value="three">
        <v-icon
          size="large"
          color="grey"
          class="mx-2"
        >
          mdi-thumb-up
        </v-icon>
        Popular
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row
            class="mt-5">
            <v-col cols="12" md="6">
              <from-list />
            </v-col>
            <v-col cols="12" md="6">
              <to-list />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row
            class="mt-5">
            <v-col cols="12" md="6">
              <two-from-list />
            </v-col>
            <v-col cols="12" md="6">
              <two-to-list />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>


</template>

<script>
import FromList from "@/components/FromList";
import ToList from "@/components/ToList";

import TwoFromList from "@/components/TwoFromList";
import TwoToList from "@/components/TwoToList";


export default {
  name: "LeftBar",
  components: {
    "from-list" : FromList,
    "to-list" : ToList,
    "two-from-list" : TwoFromList,
    "two-to-list" : TwoToList,

  },
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>

</style>
