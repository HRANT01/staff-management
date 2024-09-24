<template>
  <div>
    {{ props.member.email }}
  </div>
  <div>
    {{ props.member.last_name }}
    {{ props.member.first_name }}
  </div>
  <div>
    <img :src="props.member.avatar" alt="Member Image" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});

// Access the store

// Destructure state and action from the store
// Fetch users when the component is mounted
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>
