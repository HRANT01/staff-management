<template>
  <div class="h-screen flex flex-col">
    <NavBar v-model="searchQuery" />
    <div class="flex-grow flex items-center justify-center flex-col">
      <MemberList :members="filteredMembers" />
      <div class="mt-4"></div>
    </div>
    <div class="m-auto pb-9 mt-5">
      <Pagination v-model="currentPage" class="mt-auto" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import NavBar from "../components/NavBar.vue";
import MemberList from "../components/MemberList.vue";
import Pagination from "../components/UI/Pagination.vue";

import { useMainStore } from "../store/index";

const store = useMainStore();

const searchQuery = ref("");
const currentPage = ref(1);
const members = computed(() => store.getUsers);

const filteredMembers = computed(() => {
  return members.value.filter((member) => {
    const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.value.toLowerCase());
  });
});

// Debugging logs
watch(currentPage, async () => {
  await store.fetchUsers(currentPage.value);
});

onMounted(async () => {
  await store.fetchUsers(currentPage.value);
  console.log(members.value, "use");
});
</script>

<style scoped></style>
