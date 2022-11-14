<template>

    <v-toolbar
      density="compact"
      color="#fff"
      height="80px"
    >
      <v-container
        fluid
        class="d-flex align-center top_toolbar-container"
        >



        <v-toolbar-title>WhitEXchangers</v-toolbar-title>

        <v-tabs
          align-with-title
          height="80px"
        >
          <v-tab><router-link to="/">Home</router-link></v-tab>
          <v-tab><router-link to="/news/">News</router-link></v-tab>
          <v-tab><router-link to="/exchanges/">Exchanges</router-link></v-tab>
          <v-tab><router-link to="/articles/">Articles</router-link></v-tab>
          <v-tab><router-link to="/faq/">F.A.Q</router-link></v-tab>
          <v-tab><router-link to="/contacts/">Contacts</router-link></v-tab>
        </v-tabs>
        <v-btn
          variant="outlined"
          color="primary"
          class="ml-10"
        >
          Login
        </v-btn>
        <v-btn
          variant="outlined"
          color="green"
          class="ml-3"
        >
          Create account
        </v-btn>
      </v-container>


    </v-toolbar>
</template>

<script>
export default {

}

</script>
