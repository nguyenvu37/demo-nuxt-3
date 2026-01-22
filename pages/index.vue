<script lang="ts" setup>
import wpImage from '~/assets/images/home/wp.webp'

const { projectName } = useRuntimeConfig().public
const counterStore = useCounterStore()
const { decrement, increment } = counterStore

const isModalOpen = ref(false)
const isModalOpenWelcome = ref(false)

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: wpImage,
      fetchpriority: 'high',
    },
  ],
})
</script>

<template>
  <div class="home-page">
    <div class="hero-section">
      <h1 class="hero-title">Home {{ projectName }}</h1>
      <p class="hero-subtitle">Welcome to your Nuxt 3 project with SCSS!</p>
    </div>

    <div class="hero-banner flex items-center w-full justify-center mb-10">
      <img
        src="~/assets/images/home/wp.webp"
        alt="banner"
        width="860"
        height="360"
        fetchpriority="high"
      />
    </div>

    <div class="demo-container">
      <div class="demo-card">
        <h2 class="demo-title">Pinia Store Demo</h2>
        <div class="counter-controls">
          <BaseButton variant="danger" @click="decrement()">-</BaseButton>
          <span class="counter-display">{{ counterStore.count }}</span>
          <BaseButton variant="success" @click="increment()">+</BaseButton>
        </div>
      </div>

      <div class="demo-card glass-card">
        <h2 class="demo-title">SCSS Features Demo</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <h3>Variables</h3>
            <p>SCSS variables for consistent theming</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔧</div>
            <h3>Mixins</h3>
            <p>Reusable style patterns</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <h3>Functions</h3>
            <p>Dynamic style calculations</p>
          </div>
        </div>
      </div>
      <div class="demo-card">
        <h2 class="demo-title">Modal Component with click outside</h2>
        <div class="flex items-center justify-center">
          <BaseButton @click="isModalOpen = true">Open Modal</BaseButton>
        </div>
      </div>
      <div class="demo-card">
        <h2 class="demo-title">Modal Component without click outside</h2>
        <div class="flex items-center justify-center">
          <BaseButton @click="isModalOpenWelcome = true">Open Modal</BaseButton>
        </div>
      </div>
    </div>

    <LazyModalsWelcome v-model="isModalOpen" />
    <LazyModalsWelcome
      v-model="isModalOpenWelcome"
      :close-on-click-outside="false"
    />
  </div>
</template>

<style lang="scss" scoped src="~/assets/scss/pages/home/index.scss"></style>
