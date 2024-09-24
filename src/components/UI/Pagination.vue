<template>
  <nav aria-label="Pagination">
    <ul class="flex space-x-2">
      <li>
        <button
          class="px-3 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          Previous
        </button>
      </li>
      <li v-for="page in visiblePages" :key="page">
        <button
          class="px-3 py-2 text-sm border rounded-md"
          :class="
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700'
          "
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          class="px-3 py-2 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!hasNextPage"
          @click="nextPage"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
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
    default: 10, // Fixed 10 pages display
  },
});

const emit = defineEmits(["update:modelValue"]);

const currentPage = ref(props.modelValue);

// Visible pages are always 1 to pagesToShow (e.g., 1 to 10)
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
  if (props.hasNextPage) {
    currentPage.value++;
    emit("update:modelValue", currentPage.value);
  }
};

const goToPage = (page) => {
  currentPage.value = page;
  emit("update:modelValue", currentPage.value);
};
</script>
