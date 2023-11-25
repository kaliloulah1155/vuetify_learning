<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" location="left" color="primary">

                <v-list
                >

                     <v-list-item
                 
                     v-for="link in links" :key="link.icon">
                        <template v-slot:prepend>
                            <v-icon color="white" class="text-white">{{ link.icon }}</v-icon>
                        </template>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                 


                </v-list>

            </v-navigation-drawer>

    <v-app-bar app flat dark>
                <v-toolbar>
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-toolbar-title class="text-uppercase text-grey">
                        <span class="font-weight-light">Todo</span>
                        <span>Ninja</span>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn flat color="grey">
                        <span>Sign out</span>
                        <v-icon right>exit_to_app</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-app-bar>

     
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
    name: 'NavbarComponent',
    components: {},
    data() {
        return {
            drawer: true,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ]
        }
    }
});
</script>