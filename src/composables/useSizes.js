import { computed } from 'vue'

export const sizeClass = (size, index) => computed(() => `${index}-${size}`)
