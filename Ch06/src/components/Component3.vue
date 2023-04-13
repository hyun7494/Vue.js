<template>
  <h4>Component3</h4>

  <p>Vuex count : {{ count }}</p>
  <input type="number" v-model="count" />
  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => store.state.count);
const btnInit = function () {
  store.dispatch("initCount", count);
  // store action 호출
};
</script>
<style scoped></style>
