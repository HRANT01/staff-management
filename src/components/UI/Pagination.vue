<template>
  <div
    aria-label="Pagination"
    class="flex justify-center items-center gap-2 w-full"
  >
    <!-- Previous Button -->
    <button
      class="px-4 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      Previous
    </button>

    <!-- Page Numbers -->
    <div v-for="page in visiblePages" :key="page">
      <button
        class="px-4 py-2 text-sm border rounded-md"
        :class="{
          'bg-blue-500 text-white': currentPage === page,
          'bg-white text-gray-700': currentPage !== page,
        }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      class="px-4 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage === props.pagesToShow"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  hasNextPage: {
    type: Boolean,
    default: true,
  },
  pagesToShow: {
    type: Number,
    default: 2, // Number of pages to show
  },
});

const emit = defineEmits(["update:modelValue"]);

const currentPage = ref(props.modelValue);

const visiblePages = computed(() => {
  return Array.from({ length: props.pagesToShow }, (_, i) => i + 1);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:modelValue", currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < props.pagesToShow) {
    currentPage.value++;
    emit("update:modelValue", currentPage.value);
  }
};

const goToPage = (page) => {
  currentPage.value = page;
  emit("update:modelValue", currentPage.value);
};
</script>

<style scoped>
/* No custom CSS needed, all styles are handled with Tailwind */
</style>
