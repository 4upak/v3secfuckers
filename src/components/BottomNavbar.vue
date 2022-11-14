<template>
  <v-container  fluid>
    <v-footer
        color="white"

    >
      <v-container
        fluid
        class="d-flex mdi-format-align-right top_toolbar-container"
      >
        <v-toolbar-title>© Copyright 2022</v-toolbar-title>
        <v-tabs
            align-with-title
            color="#6e6d73"
        >
          <v-tab><router-link to="/">Home</router-link></v-tab>
          <v-tab><router-link to="/news/">News</router-link></v-tab>
          <v-tab><router-link to="/exchanges/">Exchanges</router-link></v-tab>
          <v-tab><router-link to="/articles/">Articles</router-link></v-tab>
          <v-tab><router-link to="/faq/">F.A.Q</router-link></v-tab>
          <v-tab><router-link to="/contacts/">Contacts</router-link></v-tab>
        </v-tabs>
      </v-container>


    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "BottomNavbar",

}
</script>
