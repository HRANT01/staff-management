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

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits();

const searchValue = ref(props.modelValue);

watch(searchValue, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    searchValue.value = newValue;
  }
);
</script>

<style scoped></style>
