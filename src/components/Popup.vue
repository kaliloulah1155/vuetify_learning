<template>
    <v-dialog persistent width="600px">
        <template v-slot:activator="{ props }">
            <v-btn flat v-bind="props" text="Add new project" color="success"></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card title="Add a New Project">
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" color="primary" v-model="title" prepend-inner-icon="folder"
                            :rules="inputRules"></v-text-field>
                        <v-textarea label="Information" :rules="inputRules" color="primary" v-model="content"
                            prepend-inner-icon="edit"></v-textarea>

                        <v-menu :close-on-content-click="menu_dt">
                            <template v-slot:activator="{ props }">
                                <v-text-field label="Due date" :rules="inputRules" readonly v-bind="props"
                                    v-model="formattedDate" hide-details prepend-inner-icon="date_range"
                                    color="primary"></v-text-field>
                            </template>
                            <v-date-picker class="d-flex justify-center" v-model="selectedDate" hide-actions title="">
                                <template v-slot:header></template>
                            </v-date-picker>
                        </v-menu>
                    </v-form>
                </v-card-text>
                <v-card-actions class="mb-2">
                    <v-spacer></v-spacer>
                    <v-btn text="Fermer" variant="elevated" @click="isActive.value = false"></v-btn>
                    <v-btn color="green-darken-3" variant="elevated" :loading="loading" @click.prevent="submit">
                        Add project
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>

    </v-dialog>
</template>
<script>
import { defineComponent } from 'vue';
import { format } from 'date-fns'
import db from '@/fb'
import {collection,addDoc} from "firebase/firestore"

export default defineComponent({
    name: 'PopupComponent',
    data() {
        return {
            title: '',
            content: '',
            isActive: true,
            due: null,
            selectedDate: null,
            menu_dt: false,
            loading:false,
            inputRules: [
                v => v.length >= 3 || "La longueur minimale est de 3 caractères"

            ]
        }
    },
    computed: {
        formattedDate() {

            return this.selectedDate ? this.selectedDate.toLocaleDateString("fr") : "";
        }
    },
    methods: {
        fermer(){
             this.isActive
        },
        async submit() {
                this.loading=true
            if (this.$refs.form.validate()) {

                if (this.title !== '' && this.content && this.title !== '' && this.due !== '') {
                   // console.log(this.title, ' - ', this.content)
                    
                    const colRef=collection(db,'projects')
                    const project ={
                        title:this.title,
                        content:this.content,
                        due:this.due,
                        person:"Ibson",
                        status:"ongoing"
                    }

                    const docRef= await addDoc(colRef,project)
                   this.loading = false
                   this.isActive=false

                   if(docRef.id !=='' ){
                        this.$emit('projectAdded')
                   }
                    
                    //console.log('Document created with ID ',docRef.id)
                  
                }else{
                     this.loading = false
                }

            }

        }

    },
    watch: {
        selectedDate: function (vals) {
            if (vals) {
                this.due = format(vals, 'yyyy-dd-MM');
            }

        }
    },
})
</script>