<template>
  <v-card
    color="grey-lighten-4"
    flat
    height="50px"
    rounded="0"
  >
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>WhitEXchangers</v-toolbar-title>

      <v-tabs
        align-with-title
      >
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab><router-link to="/news/">News</router-link></v-tab>
        <v-tab><router-link to="/exchanges/">Exchanges</router-link></v-tab>
        <v-tab><router-link to="/articles/">Articles</router-link></v-tab>
        <v-tab><router-link to="/faq/">F.A.Q</router-link></v-tab>
        <v-tab><router-link to="/contacts/">Contacts</router-link></v-tab>
      </v-tabs>

    </v-toolbar>
  </v-card>
</template>

<script>
export default {

}

</script>
