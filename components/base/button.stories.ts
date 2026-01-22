import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import BaseButton from './button.vue'

const meta = {
  title: 'Base/Button',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    disabled: false,
    icon: false,
  },
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    default: 'Danger Button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
    default: 'Success Button',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}

export const Icon: Story = {
  args: {
    variant: 'primary',
    icon: true,
    default: '+',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">{{ args.default }}</BaseButton>',
  }),
}
