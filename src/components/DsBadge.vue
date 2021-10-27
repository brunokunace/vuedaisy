<template>
  <div class="badge" :class="classes">
    <slot>
      {{ props.text }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'DsBadge'
}
</script>
<script setup>
import { computed } from 'vue'
import { colorProps, sizeProps } from '../composables/useProps'
const index = 'badge'
const props = defineProps({
  ...colorProps(),
  ...sizeProps(),
  text: {
    type: String,
    default: ''
  },
  outline: {
    type: Boolean,
    default: false
  },
  ghost: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => {
  return {
      [`${index}-${props.color}`]: true,
      [`${index}-${props.size}`]: true,
      [`${index}-outline`]: props.outline,
      [`${index}-ghost`]: props.ghost
  }
})
</script>
