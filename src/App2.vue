<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="800"
  >
    <v-app-bar
      color="#0D47A1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>BSG One  SAP B1</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="#2196F3--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
        <!-- <Login/> -->
      <TextArea/>
    </v-content>
  </v-card>
</template>
<script>
  //import Login from './components/Login';
  import TextArea from './components/TextArea';

  export default {
    name : 'Header',

    components:{
      TextArea
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>
