
<template>
  <v-app>
    <v-main>
      <topnavbar />
      <v-container fluid>
        <router-view />
      </v-container>
      <bottomnavbar />
    </v-main>
  </v-app>
</template>

<script>
  import TopNavbar from '@/components/TopNavbar'
  import BottomNavbar from "@/components/BottomNavbar";

  export default {
    name: 'App',
    components: {
      topnavbar: TopNavbar,
      bottomnavbar: BottomNavbar
    }
  }
</script>

