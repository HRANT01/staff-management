<template>
  <div class="flex">
    <div v-for="member in props.members">
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
