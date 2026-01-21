<template>
  <div>
    <h1 class="text-3xl">Home {{ projectName }}</h1>

    <div class="mt-8 p-6 border rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold mb-4">Pinia Store Demo</h2>
      <div class="flex items-center gap-4">
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          @click="decrement()"
        >
          -
        </button>
        <span class="text-2xl font-mono">{{ count }}</span>
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          @click="increment()"
        >
          +
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          @click="decrement"
        >
          -
        </button>
        <span class="text-2xl font-mono">{{ counter.count }}</span>
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          @click="increment"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { projectName } = useRuntimeConfig().public
const counter = useCounterStore()
const { count, decrement, increment } = counter
// const { count } = storeToRefs(counter);
</script>

<style></style>
