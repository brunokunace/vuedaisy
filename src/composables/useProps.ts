import { colors, sizes } from '../constants/index'

export const colorProps = () => ({
    color: {
        type: String,
        default: 'primary',
        validator(value:string) {
            return colors.includes(value)
        }
    }
})

export const sizeProps = () => ({
    size: {
        type: String,
        default: 'md',
        validator(value:string) {
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
