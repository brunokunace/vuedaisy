<template>
  <button class="btn" :class="classes" :disabled="props.disabled">
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>

<script>
export default {
  name: 'DsButton'
}
</script>
<script setup>
import { computed } from 'vue'
import { colorProps, sizeProps, loadingProps } from '../composables/useProps'
import { colorsClass } from '../composables/useColors'
import { sizeClass } from '../composables/useSizes'
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
    default: false
  }
})
const outlineClass = computed(() => {
  return props.outline ? `${index}-outline` : null
})
const wideClass = computed(() => {
  return props.wide ? `${index}-wide` : null
})
const blockClass = computed(() => {
  return props.block ? `${index}-block` : null
})
const circleClass = computed(() => {
  return props.circle ? `${index}-circle` : null
})
const squareClass = computed(() => {
  return props.square ? `${index}-square` : null
})
const ghostClass = computed(() => {
  return props.ghost ? `${index}-ghost` : null
})
const linkClass = computed(() => {
  return props.link ? `${index}-link` : null
})
const activeClass = computed(() => {
  return props.active ? `${index}-active` : null
})
const disabledClass = computed(() => {
  return props.disabled ? `${index}-disabled` : null
})
const loadingClass = computed(() => {
  return props.loading ? 'loading' : null
})
const glassClass = computed(() => {
  return props.glass ? 'glass' : null
})
const noAnimationClass = computed(() => {
  return props.noAnimation ? 'no-animation' : null
})
const classes = computed(() => {
  return [
    colorsClass(props.color, index).value,
    sizeClass(props.size, index).value,
    outlineClass.value,
    loadingClass.value,
    wideClass.value,
    blockClass.value,
    circleClass.value,
    squareClass.value,
    ghostClass.value,
    linkClass.value,
    activeClass.value,
    disabledClass.value,
    glassClass.value,
    noAnimationClass.value
  ]
})
</script>


<style scoped>
</style>
