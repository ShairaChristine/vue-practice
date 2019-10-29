<template>
  <v-card >
    <v-app-bar
        flat
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="#cddc39"
        dark
        shrink-on-scroll
        prominent
        src="../assets/img/Hero-img.jpeg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-5"
        scroll-threshold="200"
        height="800px"
        >
        <template v-slot:img="{ props }">
            <v-img
            v-bind="props"
            gradient="to top , rgba(128, 203, 196,.2), rgba(0,150,136,.7)"
            ></v-img>
        </template>

        <v-app-bar-nav-icon @click.native="drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title style="overflow: inherit;"> <h6 class="cursive-heading">Experience more with less money!</h6></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>


        <v-menu bottom center>
            
        </v-menu>
        <template v-slot:extension>
            
        </template>
    </v-app-bar>

    <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto"
        max-height="100vh"
        >
        <v-container style="height: 100000000px">
            
        </v-container>
    </v-sheet>

  </v-card>
</template>

<script>
import {bus} from '@/main.js'

 export default {
    data: () => ({
      collapseOnScroll: true,
    }),
    methods: {
        drawer() {
            bus.$emit('sidebar');
        }
    },
  }
</script>

<style>

</style>