<template>

  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">
        <v-icon
          size="large"
          color="white"
          class="mx-2"
        >
          mdi-view-quilt
        </v-icon>
        Table
      </v-tab>
      <v-tab value="two">
        <v-icon
          size="large"
          color="white"
          class="mx-2"
        >
          mdi-view-list
        </v-icon>
        List</v-tab>
      <v-tab value="three">
        <v-icon
          size="large"
          color="white"
          padding="10"
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

export default {
  name: "LeftBar",
  components: {
    "from-list" : FromList,
    "to-list" : ToList,

  },
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>

</style>
