<template>
  <base-layout page-title="Memories you have uploaded">
    <!--ADD BUTTON-->
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <!--LIST-->
    <ion-list class="ion-margin">
      <!--LIST ITEMS-->
      <ion-item 
        v-for="memory in memories" 
        :router-link="`/memories/${memory.id}`"
        :key="memory.id">

        <!--ITEM TUMBNAIL-->
        <ion-thumbnail slot="start">
          <ion-img :src="memory.img" :alt="memory.title"></ion-img>
        </ion-thumbnail>

        <!--ITEM TITLE-->
        <ion-label>
          {{memory.title}}
        </ion-label>

      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
//Estos componentes son necesarios para cada componente personalizado y el "lazy load"
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel, IonButton, IonIcon } from "@ionic/vue";
import { add } from 'ionicons/icons';
export default {
  data() {
    return { add };
  },
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon
  },
  computed: {
    memories() {
      //Gracias a vuex puedo acceder a los datos que definí en otro archivo
      return this.$store.getters.memories;
    }
  }
};
</script>

<style scoped>

ion-list{
  background-color: #1e1e1e;
}

</style>