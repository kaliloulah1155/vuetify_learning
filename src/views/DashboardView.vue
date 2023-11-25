<template>
  <div class="dashboard">
    <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-row  :class="` mb-1  project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption text-grey">
              Project title
            </div>
            <div>  {{ project.title }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption text-grey">
              Person
            </div>
            <div> {{ project.person }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption text-grey">
              Due by
            </div>
            <div> {{ project.due }}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
           
            <div class="text-right"> 
              <v-chip size="small" :class="`${project.status} caption my-2  `"   >
                   {{ project.status }} 
                </v-chip>
            </div>
          </v-col>
        </v-row>
             <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
 
<script>
import { defineComponent } from 'vue';
// Components
export default defineComponent({
  name: 'DashboardView',
  components: {},
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      ]
    }
  }
});
</script>
<style scoped>
.project.complete{
  border-left:4px solid #3cd1c2
}
.project.ongoing{
  border-left:4px solid orange
}
.project.overdue{
  border-left:4px solid tomato
}

.v-chip.complete{
  color:white;
  background: #3cd1c2;
}
.v-chip.ongoing{
   color:white;
  background: #ffaa2c;
}
.v-chip.overdue{
   color:white;
  background: #f83e70;
}
</style>