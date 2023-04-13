/**
 * Router 인스턴스 정의
 */

import { createRouter, createWebHistory } from "vue-router";
import AxiosComponent from "../components/sub1/AxiosComponent.vue";
import RestComponent from "../components/sub2/RestComponent.vue";
import JWTComponent from "../components/sub3/JWTComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/axios", name: "AxiosComponent", component: AxiosComponent },
    { path: "/rest", name: "RestComponent", component: RestComponent },
    { path: "/jwt", name: "JWTComponent", component: JWTComponent },
  ],
});

// router 내보내기 -> main.js 등록
export default router;
