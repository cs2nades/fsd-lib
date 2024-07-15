import { onMounted, ref, type Ref } from 'vue'

export function useModal() {
    const isVisible = ref(false)
    const open = () => (isVisible.value = true)
    const close = (e: MouseEvent) => {
        if (e.currentTarget === e.target) isVisible.value = false
    }

    return { isVisible, open, close }
}
