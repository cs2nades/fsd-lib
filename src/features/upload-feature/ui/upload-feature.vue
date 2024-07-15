<template>
    <button @click="cmodalControllers?.open" class="bg-red-200 px-4 py-2.5">
        Open File-only Modal
    </button>
    <CModal ref="cmodalControllers">
        <CModalBodyVariant1>
            <template #heading> upload-feature </template>
            <template #default>
                <c-form>
                    <CUpload
                        variant="dropzone"
                        :directory="false"
                        :multiple="true"
                    />
                </c-form>
            </template>
            <template #footer> footer-stuff </template>
        </CModalBodyVariant1>
    </CModal>
</template>

<script setup lang="ts">
import { CModal, CModalBodyVariant1, CForm, CUpload } from '@/shared/ui'
import { ref } from 'vue'

const cmodalControllers = ref<{ open: () => void }>()
</script>

<style scoped></style>
