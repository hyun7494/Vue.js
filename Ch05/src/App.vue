<template>
  <h3>Ch05.Router 실습</h3>
  <h4>1) Router 기본</h4>
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>

  <hr />
  <h4>2) Nested Router</h4>
  <router-link to="/parent">Parent</router-link>
  <hr />
  <h4>3) Named View</h4>
  <router-link to="/main1">Main1</router-link>
  <router-link to="/main2">Main2</router-link>
  <router-link to="/main3">Main3</router-link>
  <hr />

  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<script setup></script>

<style scoped></style>
