<template>
  <div
    class="w-full bg-gray-800 flex justify-between items-center mobile:flex-col"
  >
    <div class="text-3xl font-bold flex items-center text-white p-2">
      <Icon name="people" class="m-2" />
      Staff Directory
    </div>
    <div class="w-[50%] mobile:w-[90%] mobile:pb-5 p-3">
      <CustomInput
        v-model="searchValue"
        placeholder="Search Staff Member By Name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import CustomInput from "../components/UI/CustomInput.vue";
import Icon from "./UI/Icon.vue";

// Define props
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

// Define emits
const emit = defineEmits();

// Local state for the search value
const searchValue = ref(props.modelValue);

// Emit changes to the parent component
watch(searchValue, (newValue) => {
  emit("update:modelValue", newValue);
});

// Watch for changes in the prop to keep the local state in sync
watch(
  () => props.modelValue,
  (newValue) => {
    searchValue.value = newValue;
  }
);
</script>

<style scoped></style>
