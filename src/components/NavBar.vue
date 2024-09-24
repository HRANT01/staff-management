<template>
  <div class="w-full bg-gray-800 flex justify-between items-center">
    <div class="text-3xl font-bold flex items-center text-white p-2">
      <Icon name="people" class="m-2" />
      Staff Directory
    </div>
    <div class="w-[50%] p-3">
      <CustomInput placeholder="Search Staff Member By Name" />
    </div>
  </div>
</template>

<script setup>
import CustomInput from "../components/UI/CustomInput.vue";
import Icon from "./UI/Icon.vue";
</script>

<style scoped></style>
