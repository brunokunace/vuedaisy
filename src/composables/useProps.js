import { colors, sizes } from '../constants'

export const colorProps = () => ({
    color: {
        type: String,
        default: 'primary',
        validator(value) {
            return colors.includes(value)
        }
    }
})

export const sizeProps = () => ({
    size: {
        type: String,
        default: 'md',
        validator(value) {
            return sizes.includes(value)
        }
    }
})

export const loadingProps = () => ({
    loading: {
        type: Boolean,
        default: false
    }
})
