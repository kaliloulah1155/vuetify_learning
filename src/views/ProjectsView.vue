<template>
  <div class="projects">
    <h1 class="text-subtitle-1 text-grey">Projects</h1>


    <v-container class="my-5">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel :title="project.title" v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-text>
            <v-card variant="flat">
              <v-card-text class="px-4 text-grey">
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
// Components
export default defineComponent({
  name: 'ProjectsView',
  components: {},
    data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
          { title: 'Design a new website ..again', person: 'The Net Ninja', due: '1st Jan 2023', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      ]
    }
  },
  computed:{
        myProjects(){
          return this.projects.filter(project=>{
                return project.person ==="The Net Ninja"
          })
        }
  }
});
</script>
<style scoped></style>
