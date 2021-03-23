<template>
    <base-layout page-title="Add a Memory" page-default-back-link="/memories">
        <!--FORMULARIO-->
        <form class="ion-margin" @submit.prevent="submitForm">
            <ion-list class="ion-no-padding">
                <!--TITULO-->
                <ion-item>
                    <ion-label position="floating">Title</ion-label>
                    <ion-input type="text" required v-model="inputTitle" />
                </ion-item>
                <!--IMAGE-->
                <ion-item>
                    <!--IMAGE BY URL-->
                    <!--
                    <ion-label position="floating">Image URL</ion-label>
                    <ion-input type="url" required v-model="inputUrl" />
                    -->
                    
                    <!--IMAGE BY CAMERA-->
                    <ion-thumbnail slot="start">
                        <img :src="cameraImageUrl">
                    </ion-thumbnail>
                    <ion-button class="ion-align-items-center" type="button" fill="clear" @click="takePhoto">
                        <ion-icon slot="start" :icon="camera"></ion-icon>
                        Take Photo
                    </ion-button>
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
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonThumbnail } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

export default {
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonIcon,
        IonThumbnail
    },
    data() {
        return {
            inputTitle: '',
            inputUrl: '',
            inputDescription: '',
            cameraImageUrl: '',
            camera
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
                img: this.cameraImageUrl,
                description: this.inputDescription
            };
            this.saveMemory(newMemory);
        },
        async takePhoto() {
            const photo = await Camera.getPhoto({ //Esperamos la foto
                resultType: CameraResultType.Uri, //La foto se almacena temporalmente
                source: CameraSource.Camera,
                quality: 75
            });
            this.cameraImageUrl = photo.webPath;
        }
    }
}
</script>

<style>
.u2u {
    padding: 0%;
}
</style>