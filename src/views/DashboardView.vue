<template>
  <div class="dashboard">
    <h1 class="text-subtitle-1 text-grey">Dashboard</h1>
    <v-container class="my-5">


      <v-row class="mb-3 ml-1">
        <v-btn size="small" flat color="grey" @click="sortBy('title')" active>
          <v-icon size="small">folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
          <v-tooltip activator="parent" location="top">Sorts project by name</v-tooltip>
        </v-btn>
        <v-btn size="small" flat color="grey" class="mx-2" @click="sortBy('person')" active>
          <v-icon size="small">person</v-icon>
          <span class="caption text-lowercase">By person</span>
          <v-tooltip activator="parent" location="top">Sorts project by person</v-tooltip>
        </v-btn>
      </v-row>
      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="` mb-1  project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption text-grey">
              Project title
            </div>
            <div> {{ project.title }}</div>
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
          
            <div> {{ project.due?.split('-').reverse().join('/') ?? '' }}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">

            <div class="text-right">
              <v-chip size="small" :class="`${project.status} caption my-2  `">
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
import db from '@/fb'
import { collection, getDocs } from "firebase/firestore"
 
// Components
export default defineComponent({
  name: 'DashboardView',
  components: {},
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    // Define a reactive reference to hold the data
    this.fetchData();
  },
  methods: {
    sortBy(params) {
      this.projects.sort((a, b) => a[params] < b[params] ? -1 : 1)
    },
    async fetchData() {
      let projectsData = []
      const projectsCollection = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsCollection);
      // Map the data from the query snapshot
      projectsData = querySnapshot.docs.map(doc => {
        return doc.data()
      });
      this.projects = projectsData
    },
  },
 
});
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.overdue {
  border-left: 4px solid tomato
}

.v-chip.complete {
  color: white;
  background: #3cd1c2;
}

.v-chip.ongoing {
  color: white;
  background: #ffaa2c;
}

.v-chip.overdue {
  color: white;
  background: #f83e70;
}
</style>