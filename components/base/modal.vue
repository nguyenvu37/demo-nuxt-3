<script lang="ts" setup>
interface Props {
  modelValue: boolean
  title?: string
  closeOnClickOutside?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: 'Modal Title',
  closeOnClickOutside: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onBackdropClick = () => {
  if (props.closeOnClickOutside) {
    close()
  }
}

// Lock body scroll when modal is open
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      lockScroll()
    } else {
      unlockScroll()
    }
  },
)

onMounted(() => {
  if (props.modelValue) {
    lockScroll()
  }
})

onUnmounted(() => {
  unlockScroll()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="modal-backdrop"
        @click.self="onBackdropClick"
      >
        <Transition name="scale" appear>
          <div class="modal-container" role="dialog" aria-modal="true">
            <!-- Header -->
            <div class="modal-header">
              <slot name="header">
                <h3>{{ title }}</h3>
              </slot>
              <button
                class="modal-close"
                aria-label="Close modal"
                @click="close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="modal-body">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer" :close="close" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style
  lang="scss"
  scoped
  src="~/assets/scss/components/base/modal.scss"
></style>
