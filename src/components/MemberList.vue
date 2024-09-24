<template>
  <div class="flex flex-wrap justify-center gap-4 m-auto">
    <div v-for="member in props.members" :key="member.id" class="flex-shrink-0">
      <MemberCard :member="member" />
    </div>
  </div>
</template>

<script setup>
import MemberCard from "./MemberCard.vue";

const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
