<script setup>
import {ref} from 'vue';
let counter = ref(0);

function add() {
  counter.value++;
};
function sub() {
  counter.value--;
};
function times() {
  counter.value * 2;
};
function divide() {
  counter.value / 2;
};
</script>

<template>
<div>
  <h1>{{ counter }}</h1>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="times">*</button>
        <button @click="divide">÷</button>
        </div>
</template>
<style scoped>
  body {
    background-color: rgb(95, 104, 235);
    text-align: center;
    border: rgb(21, 117, 117);
  }
</style>
