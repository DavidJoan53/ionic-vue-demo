<template>
    <!--CONTAINER-->
    <ion-page>
        <!--NAVBAR-->
        <ion-header>
            <ion-toolbar>
                <!--NAV RETURN BUTTON-->
                <ion-buttons slot="start"> <!--animación y buen funcionamiento-->
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <!--TITLE-->
                <ion-title>{{ pageTitle }}</ion-title>
                <!--FREE SPACE FOR ADD BUTTON-->
                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <!--BODY-->
        <ion-content>
            <!--FREE SPACE FOR DIFFERENT COMPONENTS-->
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
//Estos componentes son necesarios para cada componente personalizado
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonBackButton,
    IonButtons
    } from "@ionic/vue"
export default {
    props: ["pageTitle", "pageDefaultBackLink"],
    components: {
        //Permite la correcta carga de animaciones y transiciones moviles
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>