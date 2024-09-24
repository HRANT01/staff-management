<template>
  <div class="border rounded-lg shadow-lg p-4 bg-white w-full max-w-xs">
    <div class="flex items-center mb-4">
      <img
        :src="props.member.avatar"
        alt="Member Image"
        class="w-16 h-16 rounded-full mr-4"
      />
      <div class="flex flex-col flex-grow">
        <h2 class="text-lg font-semibold">
          {{ props.member.first_name }} {{ props.member.last_name }}
        </h2>
        <p
          class="text-gray-600 md:text-base lg:text-lg truncate overflow-hidden whitespace-nowrap"
          style="font-size: 14px"
        >
          {{ props.member.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
