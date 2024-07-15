<template>
    <Teleport to="body">
        <div
            v-if="isVisible"
            class="cmodal__bg"
            ref="cmodalBgRef"
            @click.stop="close"
        >
        
            <slot>placeholder</slot>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { useModal } from './use-modal'

const { open, close, isVisible } = useModal()

defineExpose({ open })
</script>

<style scoped>
.cmodal__bg {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
