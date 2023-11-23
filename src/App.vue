<template>
  <v-app style="background-color: #EEEEEE;" >
  <NavbarComponent />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from '@/components/Navbar'
export default {
  name: 'App',
  components:{ NavbarComponent },
  data: () => ({
    //
  }),
}
</script>
