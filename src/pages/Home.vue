<template>
  <NavBar />
  <MemberList :members="members" />
  <Pagination v-model="currentPage" />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import NavBar from "../components/NavBar.vue";
import MemberList from "../components/MemberList.vue";
import Pagination from "../components/UI/Pagination.vue";

import { useMainStore } from "../store/index";

const store = useMainStore();

const currentPage = ref(1);

const members = computed(() => store.getUsers);

watch(currentPage, () => {
  console.log(currentPage.value, "watch");
});

onMounted(async () => {
  await store.fetchUsers();
  console.log(members.value, "use");
});
</script>
