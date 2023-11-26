<template>
    <div class="team">
        <h1 class="text-subtitle-1 text-grey">Team</h1>
        <v-container   class="my-5">
           <v-row>
               <v-col xs="12" md="4" lg="3"   v-for="person in team" :key="person.name">
                      <v-card class="text-center pa-3 " flat width="250">
                            <v-avatar
                            color="grey-lighten-2"
                            size="100"
                            >
                                 <v-img
                                  :src="person.avatar"
                                  :alt="person.name"
                                 ></v-img>
                            </v-avatar>
                           <v-card-text>
                               <div>{{ person.name }}</div>
                               <div class="text-grey">{{ person.role }}</div>
                           </v-card-text>
                           <v-card-actions>
                                <v-btn flat color="grey">
                                       <v-icon size="small" left>message</v-icon>
                                       <span>Message</span>
                                </v-btn>
                           </v-card-actions>
                      </v-card>
               </v-col>
           </v-row>
        </v-container>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
// Components
export default defineComponent({
    name: 'TeamView',
    components: {},
    data(){
        return {
             team: [
                { name: 'The Net Ninja', role: 'Web developer' ,avatar: '/avatar-1.png'},
                { name: 'Ryu', role: 'Graphic designer',avatar: '/avatar-2.png' },
                { name: 'Chun Li', role: 'Web developer',avatar: '/avatar-3.png' },
                { name: 'Gouken', role: 'Social media maverick',avatar: '/avatar-4.png' },
                { name: 'Yoshi', role: 'Sales guru',avatar: '/avatar-5.png' }
            ]
        }
    }
});
</script>
<style scoped></style>