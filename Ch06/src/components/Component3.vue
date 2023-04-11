<template>
  <h4>Component3</h4>

  <p>Vuex count : {{ store.state.count }}</p>

  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const btnInit = function () {
  store.dispatch("initCount");
  // store action 호출
};
</script>
<style scoped></style>
