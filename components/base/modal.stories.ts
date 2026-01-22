import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { ref } from 'vue'
import BaseModal from './modal.vue'
import BaseButton from './button.vue'

const meta = {
  title: 'Base/Modal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    closeOnClickOutside: { control: 'boolean' },
  },
  args: {
    title: 'Example Modal',
    closeOnClickOutside: true,
  },
} satisfies Meta<typeof BaseModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Example Modal',
    closeOnClickOutside: true,
    modelValue: false,
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <div>
        <BaseButton @click="isOpen = true">Open Modal</BaseButton>
        <BaseModal
          v-model="isOpen"
          v-bind="args"
        >
          <p>This is the modal content.</p>
          <template #footer="{ close }">
            <BaseButton variant="secondary" @click="close">Cancel</BaseButton>
            <BaseButton variant="primary" @click="close">Confirm</BaseButton>
          </template>
        </BaseModal>
      </div>
    `,
  }),
}
