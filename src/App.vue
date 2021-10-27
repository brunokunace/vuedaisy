<script setup>
import DsButton from './components/DsButton.vue'
import DsButtonGroup from './components/DsButtonGroup.vue'
import DsBadge from './components/DsBadge.vue'
</script>

<template>
  <ds-button-group>
    <ds-button text="DaisyUi" />
    <ds-button text="DaisyUi">
      Mails
      <ds-badge color="accent" class="ml-2">+99</ds-badge>
    </ds-button>
    <ds-button text="DaisyUi" />
  </ds-button-group>
</template>
