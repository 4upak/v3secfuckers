<template>
  <v-container fluid>
    <v-app-bar
        color="#fff"
    >
      <v-tabs
          align-with-title
          color="#6e6d73"
          class="mt-3"
      >
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab><router-link to="/news/">News</router-link></v-tab>
        <v-tab><router-link to="/exchanges/">Exchanges</router-link></v-tab>
        <v-tab><router-link to="/articles/">Articles</router-link></v-tab>
        <v-tab><router-link to="/faq/">F.A.Q</router-link></v-tab>
        <v-tab><router-link to="/contacts/">Contacts</router-link></v-tab>
      </v-tabs>

    </v-app-bar>

  </v-container>
</template>

<script>
export default {

}

</script>
