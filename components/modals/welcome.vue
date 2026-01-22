<script lang="ts" setup>
interface Props {
  modelValue: boolean
  closeOnClickOutside?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  closeOnClickOutside: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <BaseModal
    :model-value="modelValue"
    title="Welcome to Nuxt 3"
    :close-on-click-outside="closeOnClickOutside"
    @update:model-value="onUpdate"
  >
    <p>
      This is a custom modal component built with Vue 3 Teleport and SCSS
      animations.
    </p>
    <p>It features a glassmorphism backdrop and smooth transitions.</p>

    <template #footer="{ close }">
      <BaseButton variant="secondary" @click="close">Cancel</BaseButton>
      <BaseButton variant="primary" @click="close">Confirm</BaseButton>
    </template>
  </BaseModal>
</template>
