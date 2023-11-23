<template>
    <nav>
        <v-app-bar app clipped-left flat dark>
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

        <v-navigation-drawer v-model="drawer" location="left"  color="indigo">
            <p>Test</p>
        </v-navigation-drawer>
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
            drawer: true
        }
    }
});
</script>

<style scoped></style>