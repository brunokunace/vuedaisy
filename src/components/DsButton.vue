<template>
  <button
    class="btn"
    :class="classes"
    :disabled="props.disabled"
  >
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'DsButton'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { colorProps, sizeProps, loadingProps } from '../composables/useProps'
const index = 'btn'
const props = defineProps({
  ...colorProps(),
  ...sizeProps(),
  ...loadingProps(),
  text: {
    type: String,
    default: ''
  },
  outline: {
    type: Boolean,
    default: false
  },
  wide: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  ghost: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  glass: {
    type: Boolean,
    default: false
  },
  noAnimation: {
    type: Boolean,
    default: false,
  }
})

const classes = computed(() => {
  return {
      [`${index}-${props.color}`]: true,
      [`${index}-${props.size}`]: true,
      [`${index}-outline`]: props.outline,
      [`${index}-wide`]: props.wide,
      [`${index}-block`]: props.block,
      [`${index}-circle`]: props.circle,
      [`${index}-square`]: props.square,
      [`${index}-ghost`]: props.ghost,
      [`${index}-link`]: props.link,
      [`${index}-active`]: props.active,
      [`${index}-disabled`]: props.disabled,
      [`loading`]: props.loading,
      [`glass`]: props.glass,
      [`no-animation`]: props.noAnimation
}
})
</script>
