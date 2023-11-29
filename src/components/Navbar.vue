<template>
    <nav>
        <v-navigation-drawer app v-model="drawer" location="left" color="primary">
            <v-col class="text-center mt-5">
                <v-avatar color="grey-lighten-2" size="100">
                    <v-img src="/avatar-1.png" alt="avatar"></v-img>
                </v-avatar>
                <p class="text-center text-subtitle-1 mt-1">
                    The Net Ninja
                </p>
            </v-col>

            <v-list>
                <v-list-item v-for="link in links" :key="link.icon" router :to="link.route">
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
                <!-- BEGIN: dropdown-->
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn flat color="grey" v-bind="props">
                            <v-icon left>expand_more</v-icon>
                            <span>Menu</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                           v-for="link in links"
                           :key="link.icon"
                           :value="link.icon"
                           router
                           :to="link.route"
                        >
                            <v-list-item-title > {{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- END: dropdown-->
             
                <v-btn flat color="grey">
                    <span>D&Eacute;CONNEXION</span>
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