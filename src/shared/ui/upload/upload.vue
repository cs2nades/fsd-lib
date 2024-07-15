<template>
    <label :for="props.id">{{ props.label }}</label>
    <input
        ref="fileInputRef"
        type="file"
        name=""
        :id="props.id"
        :multiple="props.multiple"
        :webkitdirectory="props.directory"
        v-show="null"
        @change="(e) => handleChange(e)"
    />

    <template v-if="props.variant === 'button'">
        <label for="filepick">Pick file</label>
    </template>

    <template v-else-if="props.variant === 'dropzone'">
        <div
            class="flex min-h-72 min-w-72 items-center justify-center border border-dashed bg-stone-700 p-4"
            @drop="dropzoneOnDrop"
            @enter="dropzoneOnEnter"
        >
            <div v-if="files">⬆️ Drag and drop or just click there</div>
        </div>

        <!-- <div class="size-20 bg-blue-700" draggable="true">drag me</div> -->
    </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUpload } from './use-upload'

const props = defineProps<{
    id: string
    label: string
    variant: 'button' | 'dropzone'
    multiple: boolean
    directory: boolean
}>()

function handleChange(e: Event) {
    const fileTarget = e.target as HTMLInputElement
    if (!fileTarget.files?.length) return
    const fileTargetFiles = [...fileTarget.files]
    files.value = fileTargetFiles
}

const fileInputRef = ref<HTMLInputElement>()

const { dropzoneOnDrop, dropzoneOnEnter, files } = useUpload()

onMounted(() => {
    console.log(fileInputRef.value?.files)
})
</script>

<style scoped></style>
