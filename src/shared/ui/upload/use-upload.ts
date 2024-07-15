import { onMounted, onUnmounted, ref } from 'vue'

export function useUpload() {
    const files = ref()
    
    function dropzoneOnDrop(e: DragEvent) {
        e.preventDefault()
        if (!e.dataTransfer) return
        const files = [...e.dataTransfer.files]
        console.log('ondrop', files)
    }
    function dropzoneOnEnter(e: DragEvent) {
        console.log('onenter')
    }

    const documentPreventer = (e: DragEvent) => e.preventDefault()
    onMounted(() => {
        document.addEventListener('dragover', documentPreventer)
        document.addEventListener('drop', documentPreventer)
    })
    onUnmounted(() => {
        document.removeEventListener('dragover', documentPreventer)
        document.addEventListener('drop', documentPreventer)
    })

    return { dropzoneOnDrop, dropzoneOnEnter, files }
}
