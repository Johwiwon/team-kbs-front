<template>
<v-app>
  <!-- 앱바 상단 -->
  <v-app-bar
    app
    color="primary"
    dark
  >
  <v-app-bar-nav-icon></v-app-bar-nav-icon>

  <v-toolbar-title>영상제작소</v-toolbar-title>

  <v-spacer></v-spacer>

  <v-btn icon>
    <v-icon>mdi-magnify</v-icon>
  </v-btn>

  </v-app-bar>

  <!-- 네비게이션 -->
  <v-navigation-drawer app>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            영상관리
          </v-list-item-title>
          <v-list-item-subtitle>
            페이지
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
  <v-content app>
    <router-view/>
  </v-content>
  <!-- 푸터 영역 -->
  <v-footer color="primary" dark>
    <v-spacer/> 2021 copyright by kbs
  </v-footer>
</v-app>
</template>

<script>
export default {
  name:"App",
  data () {
      return {
        items: [
          { title: '영화', icon: 'mdi-view-dashboard' ,to:"/home"},
          { title: '애니', icon: 'mdi-image' ,to:"/ab"},
          { title: '재생확인', icon: 'mdi-help-box' ,to:"/showVideo"},
          { title: '파일업로드', icon: 'mdi-view-dashboard' ,to:"/fileInsert"},
        ],
        right: null,
      }
    },
};
</script>
