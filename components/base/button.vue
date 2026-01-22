<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
  icon: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <button
    :class="[
      'base-button',
      `base-button--${variant}`,
      { 'base-button--icon': icon },
    ]"
    :type="type"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style
  lang="scss"
  scoped
  src="~/assets/scss/components/base/button.scss"
></style>
