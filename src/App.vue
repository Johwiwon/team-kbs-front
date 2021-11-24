<template>
<v-app>
  <v-navigation-drawer app>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            영상관리
          </v-list-item-title>
          <v-list-item-subtitle>
            관리자페이지
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
export default {

  data () {
      return {
        items: [
          { title: '영화', icon: 'mdi-view-dashboard' ,to:"/home"},
          { title: '애니', icon: 'mdi-image' ,to:"/ab"},
          { title: '재생확인', icon: 'mdi-help-box' ,to:"/showVideo"},
        ],
        right: null,
      }
    },
};
</script>
