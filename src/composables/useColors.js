import { computed } from 'vue'

export const colorsClass = (color, index) => computed(() => `${index}-${color}`)
