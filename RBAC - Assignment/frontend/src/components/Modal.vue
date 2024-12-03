<template>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-xl font-bold"><slot name="title"></slot></h2>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div class="mt-4">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
</template>
  