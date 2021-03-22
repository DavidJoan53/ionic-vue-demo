<template>
    <base-layout page-title="Add a Memory" page-default-back-link="/memories">
        <!--FORMULARIO-->
        <form class="ion-padding" @submit.prevent="submitForm">
            <ion-list>
                <!--TITULO-->
                <ion-item>
                    <ion-label position="floating">Title</ion-label>
                    <ion-input type="text" required v-model="inputTitle" />
                </ion-item>
                <!--IMAGE-->
                <ion-item>
                    <ion-label position="floating">Image URL</ion-label>
                    <ion-input type="url" required v-model="inputUrl" />
                </ion-item>
                <!--DESCRIPTION-->
                <ion-item>
                    <ion-label position="floating">Description</ion-label>
                    <ion-textarea rows="5" v-model="inputDescription"></ion-textarea>
                </ion-item>
            </ion-list>
            <!--SUBMIT-->
            <ion-button type="submit" class="ion-margin-top" expand="block">Save</ion-button>
        </form>
    </base-layout>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
export default {
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    },
    data() {
        return {
            inputTitle: '',
            inputUrl: '',
            inputDescription: ''
        }
    },
    methods: {
        saveMemory(memoryData) {
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/memories');
        },
        submitForm() {
            const newMemory = {
                title: this.inputTitle,
                img: this.inputUrl,
                description: this.inputDescription
            };
            this.saveMemory(newMemory);
        }
    }
}
</script>