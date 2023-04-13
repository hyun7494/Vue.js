<template lang="">
  <h4>REST API 실습하기</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>연락처</td>
      <td>나이</td>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h4>GET 주소 파라미터 전송예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button v-on:click="getUser">User 요청</button>
  <p>
    아이디 : {{ user.uid }}<br />
    이름 : {{ user.name }}<br />
    연락처 : {{ user.hp }}<br />
    나이 : {{ user.age }}<br />
  </p>

  <h4>POST 예제</h4>
  <form v-on:submit.prevent="postUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>연락처</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>

  <h4>PUT 예제</h4>
  <form v-on:submit.prevent="putUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>연락처</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="text" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>

  <h4>Delete 예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button v-on:click="deleteUser">User 요청</button>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, ref, reactive } from "vue";

const users = ref([]);
const user = reactive({
  uid: "",
  name: "",
  hp: "",
  age: 0,
});
const inputText = ref("");

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});

function getUser() {
  axios
    .get(`http://localhost:8080/Ch09/user1/${inputText.value}`)
    .then((response) => {
      console.log(response.data);
      Object.assign(user, response.data);
    })
    .catch((error) => {});
}

function postUser() {
  const jsonData = {
    uid: user.uid,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };

  axios
    .post("http://localhost:8080/Ch09/user1", jsonData)
    .then((response) => {
      console.log(response.data);
      users.value = response.data; // spring boot 컨트롤러가 user1s라는 리스트 리턴 => users를 리턴한 리스트로 대체하여 users 불러오는 테이블에 post로 insert한 내용이 바로 업데이트되도록 함
      alert("등록");
    })
    .catch((error) => {
      console.log(error);
    });
}

const putUser = () => {
  const jsonData = {
    uid: user.uid,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };

  axios
    .put("http://localhost:8080/Ch09/user1", jsonData)
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
      alert("수정");
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteUser = function () {
  axios
    .delete(`http://localhost:8080/Ch09/user1/${inputText.value}`)
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
      alert("삭제");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
