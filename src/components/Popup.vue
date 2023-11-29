<template>
    <v-dialog persistent width="600px">
          <template v-slot:activator="{props}">
                <v-btn
                flat 
                v-bind="props"
                text="Add new project"
                color="success"
                ></v-btn>
          </template>
          <template v-slot:default="{isActive}">
              <v-card title="Add a New Project">
                  <v-card-text> 
                    Lorem ipsum
                  </v-card-text>
                  <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                        text="Fermer"
                        @click="isActive.value=false"
                        ></v-btn>
                  </v-card-actions>
              </v-card>
          </template>
           
    </v-dialog>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PopupComponent',
})
</script>