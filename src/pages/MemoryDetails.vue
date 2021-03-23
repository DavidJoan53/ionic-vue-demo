<template>
  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/memories">
    <!--CONDITIONAL TITLE-->
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <!--MEMORY DETAILS-->
    <div v-else>
        <!--IMAGEN-->
        <ion-img :src="loadedMemory.img" :alt="loadedMemory.title"></ion-img>
        <!--TITLE-->
        <h2 class="light-font ion-text-center">
            {{ loadedMemory.title }}
        </h2>
        <!--DESCRIPTION-->
        <p class="light-font ion-text-center">
            {{ loadedMemory.description }}
        </p>
    </div>
  </base-layout>
</template>

<script>
import { IonImg } from '@ionic/vue';
export default {
    components: {
        IonImg
    },
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    }
}
</script>

<style>
.light-font {
    color: white;
}
</style>